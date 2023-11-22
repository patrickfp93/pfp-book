import { Col, Content, FlexboxGrid } from "rsuite";
import useThemeAppLayout from "../../../services/hooks/useThemeAppLayout";
import { useWindowSize } from "@uidotdev/usehooks";
import "./index.less";

type AppContentProps = {
    headerMinHeight: number;
    footerMinHeight: number;
    children?: React.ReactNode;
};
export default function AppContent({ headerMinHeight, footerMinHeight, children }: AppContentProps) {
    const winSize = useWindowSize();
    const contentMinHeight = (winSize.height ?? 0) - (headerMinHeight + footerMinHeight);
    const { themeState } = useThemeAppLayout();
    const className = "content-" + themeState;
    return (<Content className={className}>
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item className="page-content" style={{ minHeight: contentMinHeight, background: 'var(@B700)' }} as={Col} colspan={24}  md={20} lg={16}>{children}</FlexboxGrid.Item>
        </FlexboxGrid>
    </Content>)
}