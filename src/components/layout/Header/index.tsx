import "./index.less";
import { motion } from "framer-motion";
import { Header } from "rsuite";
import AppBasicProps from "../../../interfaces/AppBasicProps";
import useAppLayout from "../../../services/hooks/useAppLayout";
export default function AppHeader( super_props : AppBasicProps) {
    const {classNameExtention,variants,aspectState,children, style, ...props} = useAppLayout(super_props);
    const className = "header-" + classNameExtention;
    const smokerClassName = "header-smoker-" + classNameExtention; 
    const backClass = "layout-base-back";
    return (<>
        <motion.div className={className} variants={variants} style={style} animate={aspectState}>
        <div className={smokerClassName}>
            {children}
        </div>
        </motion.div>        
        <Header className={backClass} style={style} {...props}></Header>
    </>);
}


