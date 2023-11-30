import { useState } from "react";
import ResponsiveNav from '@rsuite/responsive-nav';
import { IconButton} from "rsuite";
import { MdLightbulbOutline as MDDark, MdLightbulb as MDLight, MdLightbulbCircle as MDHighContrast } from "react-icons/md";
import useThemeAppLayout from "../../../services/hooks/useThemeAppLayout";
import useAspectAppLayout from "../../../services/hooks/useAspectAppLayout";
import "./index.less";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Menu() {
    const { themeState, handleToggleTheme } = useThemeAppLayout();
    const iconTheme = themeState == 'light' ? <MDDark /> : (themeState == 'dark' ? <MDHighContrast /> : <MDLight />)
    const containerClassName = "menu " + themeState;
    const { aspectState } = useAspectAppLayout();
    const { width } = useWindowSize();
    const [activeKey, setActiveKey] = useState<number | string | undefined>('A');
    const widthWin = width ?? 0;
    const containerStyle : React.CSSProperties = { width: (widthWin - 200), minWidth: 150 };
    return (<div className={containerClassName} >
        <IconButton appearance="subtle" onClick={() => handleToggleTheme()} circle icon={iconTheme} size="lg" style={{ boxShadow: "1px 1px 10px grey" }} />
        <div style={aspectState == 'expand' ? { display: "none" } : containerStyle}>
            <ResponsiveNav activeKey={activeKey} onSelect={setActiveKey} appearance="subtle">
                <ResponsiveNav.Item key="A" eventKey="A">
                    Home
                </ResponsiveNav.Item>
                <ResponsiveNav.Item key="B" eventKey="B">
                    Contato
                </ResponsiveNav.Item>
            </ResponsiveNav>
        </div>
    </div>)
}