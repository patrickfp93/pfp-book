import { Container, CustomProvider } from "rsuite";
import { ptBR } from "rsuite/esm/locales";
import AppFooter from "../layout/Footer";
import AppHeader from "../layout/Header";
import AppContent from "../layout/Content";
import useThemeAppLayout from "../../services/hooks/useThemeAppLayout";
import FlexMenu from "../view/FlexMenu";
import References from "../view/References";

export default function App() {
    const { themeState } = useThemeAppLayout();
    const headerMinHeight = 100;
    const footerMinHeight = 30;
    return (<CustomProvider theme={themeState} locale={ptBR}>
            <Container>
                <AppHeader style={{ minHeight: headerMinHeight }}>
                    <FlexMenu/>
                </AppHeader>
                <AppContent headerMinHeight={headerMinHeight} footerMinHeight={footerMinHeight}></AppContent>
                <AppFooter style={{ minHeight: footerMinHeight }}>
                    <References />
                </AppFooter>
            </Container>
        </CustomProvider>)
};






