import { motion } from "framer-motion";
import Footer from "rsuite/Footer";
import AppLayoutProps from "../../interfaces/AppLayoutProps";
import "./../../styles/components/layout/footer.less";
import useAppLayout from "../../hooks/useAppLayout";
export default function AppFooter(super_props : AppLayoutProps) {
    const {classNameExtention,variants,stateSize,children, style, ...props} = useAppLayout(super_props);
    const className = "footer-" + classNameExtention;
    const smokerClassName = "footer-smoker-" + classNameExtention;
    const backClass = "layout-base-back";
    return (<>
        <motion.div className={className} variants={variants} style={style} animate={stateSize}>
        <div className={smokerClassName}>
            {children}
        </div>
        </motion.div>
        <Footer className={backClass} {...props}></Footer>
    </>);
}