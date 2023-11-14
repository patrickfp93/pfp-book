import { Avatar, Container, Content, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "./components/app/AppFooter";
import AppHeader from "./components/app/AppHeader";
import { useMeasure, useToggle, useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import avatarImg from "./assets/me_anime_block.png";

export default function App() {
    const [aspectState, toggleAspectState] = useToggle(true);
    const sizeAppHeader = aspectState ? "expand" : "collapse";
    const sizeAppFooter = aspectState ? "expand" : "collapse";
    const [themeState, _toggleThemeState] = useToggle(true);
    const winSize = useWindowSize();
    const [avatarRef, avatarSize] = useMeasure();
    const avatarStyle = {
        left: ((winSize.width ?? 0) / 2) - (avatarSize.width ?? 0) / 2,
        top: ((winSize.height ?? 0) / 2) - (avatarSize.height ?? 0) / 2,
    };
    const headerMinHeight = 100;
    const footerMinHeight = 30;
    const contentMinHeight = (winSize.height ?? 0) - (headerMinHeight + footerMinHeight);
    return (
        <CustomProvider theme={(themeState) ? "high-contrast" : "light"} locale={ptBR}>
            <Container>
                <AppHeader style={{minHeight: headerMinHeight}} stateSize={sizeAppHeader}>
                    <Avatar ref={avatarRef} style={avatarStyle} onClick={() => toggleAspectState()} size="lg" as={motion.div} whileHover={{ scale: 2.5, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)" }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        src={avatarImg} circle />
                </AppHeader>
                <Content style={{ minHeight: contentMinHeight }} />
                <AppFooter style={{minHeight: footerMinHeight}} stateSize={sizeAppFooter}>
                </AppFooter>
            </Container>
        </CustomProvider>)
};






