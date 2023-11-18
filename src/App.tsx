import { Container, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "./components/app/AppFooter";
import AppHeader from "./components/app/AppHeader";
import { useFavicon } from "@uidotdev/usehooks";
import AppMenu from "./components/app/AppMenu";
import useLayoutAspectState from "./hooks/useLayoutAspectState";
import "./styles/components/layout/content.less";
import AppContent from "./components/app/AppContent";
import AppReferences from "./components/app/AppReferences";
//import useTheme from "./hooks/useTheme";
import themeReducer from "./context/slices/themeSlice";
import { useReducer } from "react";

export default function App() {
    useFavicon("avatar.png");
    const { aspectState, toggleAspectState } = useLayoutAspectState("expand");    
    //const {theme} = useTheme('dark');
    
    const [theme, _dispatchThemeState] =useReducer(themeReducer,"dark");
    const headerMinHeight = 100;
    const footerMinHeight = 30;
    return (
        <CustomProvider theme={theme} locale={ptBR}>
            <Container>
                <AppHeader style={{ minHeight: headerMinHeight }} stateSize={aspectState}>
                    <AppMenu aspectState={aspectState} toggleAspectState={toggleAspectState} />
                </AppHeader>
                <AppContent headerMinHeight={headerMinHeight} footerMinHeight={footerMinHeight}></AppContent>
                <AppFooter style={{ minHeight: footerMinHeight }} stateSize={aspectState}>
                    <AppReferences/>
                </AppFooter>
            </Container>
        </CustomProvider>)
};






