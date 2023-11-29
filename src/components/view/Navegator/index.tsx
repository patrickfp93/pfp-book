import useAspectAppLayout from "../../../services/hooks/useAspectAppLayout"
import { animated} from '@react-spring/web';
//import "./index.less";
import index from "./index.less?inline";
import useToggleSpring, { ToogleSpringState } from "../../../services/hooks/useToggleSpring";
const style = JSON.parse(index);
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
    //menu
    const downStyle = useToggleSpring({states: downV, value: aspectState === "expand" });

    return (<Div style={containerStyle} onClick={handleToggleAspect}>
        <Div style={topStyle}>
            <Div style={style.logo}>Logo</Div>
            <Div style={initialsStyle}>initials</Div>
            <Div style={menuStyle}> Menu</Div>
        </Div>
        <Div style={downStyle}>

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