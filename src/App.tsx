import { Container, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "./components/layout/Footer";
import AppHeader from "./components/layout/Header";
import AppMenu from "./components/view/Menu";
import AppContent from "./components/layout/Content";
import AppReferences from "./components/view/References";
import useThemeAppLayout from "./services/hooks/useThemeAppLayout";

export default function App() {
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






