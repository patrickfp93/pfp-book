import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Header} from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";
import { useRef } from "react";

export default function AppHeader({stateSize = "expand", children} : AppLayoutProps){
    const size = useWindowSize();
    const style ={
        background : '#654987',
        width : (size.width??0),
        minHeight: "100px"
    }
    const variants : Variants ={
        expand : {
            height : ((size.height??0)/2)+"px",                        
        },
        collapse : {
            height : "0px",
        }
    }
    const ref = useRef(null);
    return(<>
    <Header ref={ref}  as={motion.div}  style={style} variants={variants} animate={stateSize}>{children}</Header>
    </>);
}