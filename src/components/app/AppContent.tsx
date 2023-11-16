import { Content } from "rsuite";
import useTheme from "../../hooks/useTheme";
import { useWindowSize } from "@uidotdev/usehooks";
import "./../../styles/components/layout/content.less";

type AppContentProps = {
    headerMinHeight: number;
    footerMinHeight: number;
    children?: React.ReactNode;
};
export default function AppContent({ headerMinHeight, footerMinHeight, children }: AppContentProps) {
    const winSize = useWindowSize();
    const contentMinHeight = (winSize.height ?? 0) - (headerMinHeight + footerMinHeight);
    const className = "content-" + useTheme();
    return (<Content className={className} style={{ minHeight: contentMinHeight}}>
        {children}
    </Content>)
}