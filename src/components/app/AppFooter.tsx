import { motion } from "framer-motion";
import Footer from "rsuite/Footer";
import AppBasicProps from "../../interfaces/AppBasicProps";
import "./../../styles/components/layout/footer.less";
import useAppLayout from "../../hooks/useAppLayout";
export default function AppFooter(super_props : AppBasicProps) {
    const {classNameExtention,variants,aspectState,children, style, ...props} = useAppLayout(super_props);
    const className = "footer-" + classNameExtention;
    const smokerClassName = "footer-smoker-" + classNameExtention;
    const backClass = "layout-base-back";
    return (<>
        <motion.div className={className} variants={variants} style={style} animate={aspectState}>
        <div className={smokerClassName}>
            {children}
        </div>
        </motion.div>
        <Footer className={backClass} {...props}></Footer>
    </>);
}