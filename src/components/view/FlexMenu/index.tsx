import useAspectAppLayout from "../../../services/hooks/useAspectAppLayout"
import { animated} from '@react-spring/web';
//import "./index.less";
import useToggleSpring, { ToogleSpringState } from "../../../services/hooks/useToggleSpring";
//import index from "./index.less?inline";
import style from './index.less.ts'
import Logo from "../Logo";
import Menu from "../Menu";
//const style = JSON.parse(index);
const Div = animated.div;
export default function Navegator() {
    const { aspectState, handleToggleAspect } = useAspectAppLayout();
    //container
    const containerStyle = useToggleSpring({states: containerV, value: aspectState === "expand" });
    //top
    const topStyle = useToggleSpring({states: topV, value: aspectState === "expand" });
    //initials
    const initialsStyle = useToggleSpring({states: initialsV, value: aspectState === "expand" });
    //menu
    const menuStyle = useToggleSpring({states: menuV, value: aspectState === "expand" });
    //down
    const downStyle = useToggleSpring({states: downV, value: aspectState === "expand" });

    return (<Div style={containerStyle}>
        <Div style={topStyle}>
            <Div style={style.logo} onClick={handleToggleAspect}><Logo/></Div>
            <Div style={initialsStyle}><h1><b>PFP</b></h1><h3><i>DEV</i></h3></Div>
            <Div style={menuStyle}> <Menu/></Div>
        </Div>
        <Div style={downStyle}>
        <h1><b>PAFEPE</b></h1><h4><i>DEV</i></h4>
        </Div>
    </Div>)
}

const containerV : ToogleSpringState = {
    start: style.container,
    end: style.containerCollapse
}

const topV : ToogleSpringState = {
    start: style.top,
    end: style.topCollapse
}

const menuV: ToogleSpringState = {
    start: style.menu,
    end: { ...style.menu, }
}

const initialsV : ToogleSpringState = {
    start: { ...style.initials, ...style.hider },
    end: style.initials,
}

const downV : ToogleSpringState = {
    start: style.down,
    end: style.downCollapse
}