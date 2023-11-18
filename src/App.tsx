import { Container, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "./components/app/AppFooter";
import AppHeader from "./components/app/AppHeader";
import { useFavicon } from "@uidotdev/usehooks";
import AppMenu from "./components/app/AppMenu";
import "./styles/components/layout/content.less";
import AppContent from "./components/app/AppContent";
import AppReferences from "./components/app/AppReferences";
import useThemeAppLayout from "./hooks/useThemeAppLayout";

export default function App() {
    useFavicon("avatar.png");  
    //const {theme} = useTheme('dark');
    const {themeState} = useThemeAppLayout();
    const headerMinHeight = 100;
    const footerMinHeight = 30;
    return (
        <CustomProvider theme={themeState} locale={ptBR}>
            <Container>
                <AppHeader style={{ minHeight: headerMinHeight }}>
                    <AppMenu/>
                </AppHeader>
                <AppContent headerMinHeight={headerMinHeight} footerMinHeight={footerMinHeight}></AppContent>
                <AppFooter style={{ minHeight: footerMinHeight }}>
                    <AppReferences/>
                </AppFooter>
            </Container>
        </CustomProvider>)
};






