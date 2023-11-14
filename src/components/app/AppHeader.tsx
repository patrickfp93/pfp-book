import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Header } from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";

export default function AppHeader({ stateSize = "expand", children, style ,...props}: AppLayoutProps) {
    const size = useWindowSize();
    const internal_style : React.CSSProperties = {
        ...style,
        background: '#654987',
        width: (size.width ?? 0),
        zIndex : 9999
        
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
        <motion.div style={{...internal_style, position:"fixed" }} variants={variants} animate={stateSize}>{children}</motion.div>
        <Header style={{...internal_style, zIndex:0}} {...props}></Header>
    </>);
}