import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import Footer from "rsuite/Footer";
import AppLayoutProps from "../../interfaces/AppLayoutProps";
import './../../styles/app.components.less';
export default function AppFooter({ stateSize = "expand", children, style ,...props}: AppLayoutProps) {
    const size = useWindowSize();
    const internal_style : React.CSSProperties = {
        ...style,
        width: (size.width ?? 0)
    }
    const variants: Variants = {
        expand: {
            height: ((size.height ?? 0) / 2) + "px",
        },
        collapse: {
            height: "0px",
        }
    }

    return (<>
        <motion.div className="footer" style={{...internal_style, position:"fixed" }} variants={variants} animate={stateSize}>{children}</motion.div>
        <Footer className="footer" style={internal_style} {...props}></Footer>
    </>);
}