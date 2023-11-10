import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Footer} from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";

export default function AppFooter({stateSize = "expand", children} : AppLayoutProps){
    const size = useWindowSize();
    
    const style ={
        background : '#968435',
        width : size.width ?? 0,
        bottom: 0
    }
    const variants : Variants ={
        expand : {
            height: (size.height??0)/2,
            position:"fixed"    ,
                    
        },
        collapse : {
            height :0,
            position:"absolute"  
        }
    }
    return(<Footer style={style}  as={motion.div} variants={variants} animate={stateSize}>{children}</Footer>);
}