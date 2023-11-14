import { Container, Content, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "./components/app/AppFooter";
import AppHeader from "./components/app/AppHeader";
import { useToggle, useWindowSize } from "@uidotdev/usehooks";
import AppMenu from "./components/app/AppMenu";
import useLayoutAspectState from "./hooks/useLayoutAspectState";

export default function App() {
    const {aspectState, toggleAspectState} = useLayoutAspectState("expand");
    const [themeState, _toggleThemeState] = useToggle(true);
    const winSize = useWindowSize();
    const headerMinHeight = 100;
    const footerMinHeight = 30;
    const contentMinHeight = (winSize.height ?? 0) - (headerMinHeight + footerMinHeight);
    return (
        <CustomProvider theme={(themeState) ? "high-contrast" : "light"} locale={ptBR}>
            <Container>
                <AppHeader style={{minHeight: headerMinHeight}} stateSize={aspectState}>
                    <AppMenu aspectState={aspectState} toggleAspectState={toggleAspectState} />
                </AppHeader>
                <Content style={{ minHeight: contentMinHeight }} />
                <AppFooter style={{minHeight: footerMinHeight}} stateSize={aspectState}>
                </AppFooter>
            </Container>
        </CustomProvider>)
};






