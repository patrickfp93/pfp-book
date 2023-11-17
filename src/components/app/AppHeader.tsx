import { motion } from "framer-motion";
import { Header } from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";
import "./../../styles/components/layout/header.less";
import useAppLayout from "../../hooks/useAppLayout";
export default function AppHeader( super_props : AppLayoutProps) {
    const {classNameExtention,variants,stateSize,children, style, ...props} = useAppLayout(super_props);
    const className = "header-" + classNameExtention;
    const smokerClassName = "header-smoker-" + classNameExtention; 
    const backClass = "layout-base-back";
    return (<>
        <motion.div className={className} variants={variants} style={style} animate={stateSize}>
        <div className={smokerClassName}>
            {children}
        </div>
        </motion.div>        
        <Header className={backClass} style={style} {...props}></Header>
    </>);
}


