import { useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import { Header} from "rsuite";
import AppLayoutProps from "../../interfaces/AppLayoutProps";

export default function AppHeader({stateSize = "expand", children} : AppLayoutProps){
    const size = useWindowSize();
    const first_state = "absolute";
    const secund_state = "fixed";
    const style ={
        background : '#654987',
        width : (size.width??0),
        position : "fixed",
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
    const animationEnd = (e : React.AnimationEvent<HTMLDivElement>) =>{
        let style = e.currentTarget.style;
        if (style.position === first_state){
            style.position = secund_state;
        }else{
            style.position = first_state;
        }
    };
    return(<Header   as={motion.div} onAnimationEnd={(e)=>animationEnd(e)} style={style} variants={variants} animate={stateSize}>{children}</Header>);
}