import useAspectAppLayout from "../../../services/hooks/useAspectAppLayout"
//import "./index.less";
import index from "./index.less?inline";
import { Variants, motion } from "framer-motion";
const style = JSON.parse(index);
const Div = motion.div;
//Navegator is soft Component
export default function Navegator() {
    const { aspectState, handleToggleAspect } = useAspectAppLayout();
    return (<Div variants={containerV} animate={aspectState} onClick={handleToggleAspect}>
        <Div variants={topV} animate={aspectState} style={{display:"inline-flex"}}>
            <Div style={style.logo}>Logo</Div>
            <Div variants={menuV} animate={aspectState}> Menu</Div>
            <Div variants={initialsV} animate={aspectState}>initials</Div>
        </Div>
        <Div variants={downV} animate={aspectState}>

        </Div>
    </Div>)
}

const containerV: Variants = {
    expand: style.container,
    collapse: style.containerCollapse
}

const topV : Variants ={
    expand : style.top,
    collape : {...style.topCollapse}
}

const menuV: Variants = {
    expand: style.menu,
    collapse: { ...style.menu, ...style.hider }
}

const initialsV = {
    expand: { ...style.initials, ...style.hider },
    collapse: style.initials,
}

const downV = {
    expand: style.down,
    collapse : style.downCollapse
}