import { useState } from "react";
import { AppAvatar } from "./AppAvatar";
import ResponsiveNav from '@rsuite/responsive-nav';
import { IconButton, Tooltip, Whisper } from "rsuite";
import { MdLightbulbOutline as MDDark, MdLightbulb as MDLight, MdLightbulbCircle as MDHighContrast } from "react-icons/md";
import useThemeAppLayout from "../../hooks/useThemeAppLayout";
import useAspectAppLayout from "../../hooks/useAspectAppLayout";

type AppMenuProps = {
    style?: React.CSSProperties
}

export default function AppMenu({ style }: AppMenuProps) {
    const mainStyle: React.CSSProperties = {
        zIndex: 9999,
        ...style
    }
    const { themeState, handleToggleTheme } = useThemeAppLayout();
    const iconTheme = themeState == 'light' ? <MDDark /> : (themeState == 'dark' ? <MDHighContrast /> : <MDLight />)
    const { aspectState } = useAspectAppLayout();
    const [activeKey, setActiveKey] = useState<number | string | undefined>('A');
    return (<div style={mainStyle}>
        <AppAvatar>
            <Whisper followCursor speaker={<Tooltip>Clique mudar o tema</Tooltip>}>
                <IconButton appearance="subtle" onClick={() => handleToggleTheme()} circle icon={iconTheme} size="sm" />
            </Whisper>
            <ResponsiveNav style={aspectState == 'expand' ? { display: "none" } : {}} activeKey={activeKey} onSelect={setActiveKey} appearance="subtle">
                <ResponsiveNav.Item key="A" eventKey="A">
                    Home
                </ResponsiveNav.Item>
                <ResponsiveNav.Item key="B" eventKey="B">
                    Contato
                </ResponsiveNav.Item>
            </ResponsiveNav>
        </AppAvatar>

    </div>)
}