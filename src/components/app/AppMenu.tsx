import { useState } from "react";
import LayoutAspectState from "../../interfaces/LayoutAspectState";
import { AppAvatar } from "./AppAvatar";
import ResponsiveNav from '@rsuite/responsive-nav';
import { IconButton } from "rsuite";
import { MdBrightness1 as MDDark, MdBrightness5 as MDLight, MdBrightness7 as MDHighContrast } from "react-icons/md";
import useTheme from "../../hooks/useTheme";

type AppMenuProps = {
    style?: React.CSSProperties
} & LayoutAspectState

export default function AppMenu({ aspectState, toggleAspectState, style }: AppMenuProps) {
    const mainStyle: React.CSSProperties = {
        zIndex: 9999,
        ...style
    }
    const {theme,toggleTheme} = useTheme();
    const iconTheme = theme == 'light'? <MDLight/> : (theme == 'dark'? <MDDark/> : <MDHighContrast/>)

    const [activeKey, setActiveKey] = useState<number | string | undefined>('A');
    return (<div style={mainStyle}>
        <AppAvatar aspectState={aspectState} toggleAspectState={toggleAspectState}>
            <IconButton appearance="subtle" onClick={() => toggleTheme()} circle icon={iconTheme} size="sm"  />
            <ResponsiveNav activeKey={activeKey} onSelect={setActiveKey} appearance="subtle">
                <ResponsiveNav.Item key="A" eventKey="A">
                    A
                </ResponsiveNav.Item>
                <ResponsiveNav.Item key="B" eventKey="B">
                    B
                </ResponsiveNav.Item>
            </ResponsiveNav>
        </AppAvatar>

    </div>)
}