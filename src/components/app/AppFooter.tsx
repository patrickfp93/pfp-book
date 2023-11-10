import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Footer} from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";

export default function AppFooter({stateSize = "expand", children} : AppLayoutProps){
    const size = useWindowSize();
    const height = size.height? size.height : 0; 
    
    const style ={
        background : '#968435'
    }
    const variants : Variants ={
        expand : {
            height: (height/2)+"px",            
        },
        collapse : {
            height :0
        }
    }
    return(<Footer style={style}  as={motion.div} transition={{duration:0.5}}  variants={variants} animate={stateSize}>{children}</Footer>);
}