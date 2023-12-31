import { animated } from "@react-spring/web";
import useAspectAppLayout from "../../../services/hooks/useAspectAppLayout.ts";
import useToggleSpring, { ToogleSpringState } from "../../../services/hooks/useToggleSpring.ts";
import "./index.less";
import style from "./index.less.ts";
import Logo from "../Logo/index.tsx";
import avatarImg from "./../../../assets/img/avatar-litle-min-min.png";
import Tooltip from "../Tooltip/index.tsx";

const Div = animated.div;

const avatarV: ToogleSpringState = {
    start: style.avatarExpand,
    end: style.avatarCollapse
}
const logoV: ToogleSpringState = {
    start: style.logoExpand,
    end: style.logoCollapse
}

export default function EmblemSwitcher() {
    const { aspectState, handleToggleAspect } = useAspectAppLayout();
    const logoStyle = useToggleSpring({ states: logoV, value: aspectState === "expand" });
    const avatarStyle = useToggleSpring({ states: avatarV, value: aspectState === "expand" });
    return (<div style={style.container} onClick={handleToggleAspect}>
        <Div style={logoStyle}><Logo /></Div>
        <Div style={avatarStyle}>
            <img className="avatar-img" src={avatarImg} />
            <Tooltip duration={10000}>Clique aqui!</Tooltip>
        </Div>
    </div>)
}