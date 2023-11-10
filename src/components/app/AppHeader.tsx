import { useMeasure, useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Header, HeaderProps } from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";

export default function AppHeader({stateSize = "expand", children} : AppLayoutProps){
    const size = useWindowSize();
    const heightWindow = size.height? size.height : 0; 
    const style ={
        background : '#654987',
    }
    const variants : Variants ={
        expand : {
            height: (heightWindow/2)+"px",            
        },
        collapse : {
            height : 0,
        }
    }
    return(<Header  style={style} as={motion.div} variants={variants} animate={stateSize}>{children}</Header>);
}