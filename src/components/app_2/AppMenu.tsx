import { JSXElementConstructor, ReactElement } from "react";
import Nav, {NavProps,NavItemProps}  from "rsuite/Nav";

export type AppMenuItem = {
    title: string,
    icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined,
    subItems?: AppMenuItem[] | undefined
    props? : NavItemProps | undefined 
}

export type AppMenuProps = {
    items: AppMenuItem[],
    navProps? : NavProps | undefined
}

function drawItem(itemMenu: AppMenuItem, index: number, key: string) {
    let newKey = key + "-item" + index;
    if ( !itemMenu.subItems || itemMenu.subItems.length === 0) {
        return (<Nav.Item {...itemMenu.props} key={newKey} icon={itemMenu.icon}>{itemMenu.title}</Nav.Item>);
    } else {
        return (<Nav.Menu key={newKey} icon={itemMenu.icon} title={itemMenu.title}>
            {itemMenu.subItems.map((subItemMenu: AppMenuItem, subIndex: number, _: AppMenuItem[]) => {
                    return drawItem(subItemMenu, subIndex, newKey);
                })}
        </Nav.Menu>);
    }
};

export default function AppMenu({items, navProps}: AppMenuProps) {
    const drawMenu = () => {
        return items.map((itemMenu: AppMenuItem, index: number, _: AppMenuItem[]) => {
            return drawItem(itemMenu,index,"Master");
        });
    };
    return (
        <Nav appearance="subtle" {...navProps}>
            {drawMenu()}
        </Nav>)
}