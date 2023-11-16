import LayoutAspectState from "../../interfaces/LayoutAspectState";
import { AppAvatar } from "./AppAvatar";
import { MdBrightness1 as MDDark, MdBrightness5 as MDLight ,MdBrightness7 as MDHighContrast } from "react-icons/md";

type AppMenuProps = {
    style?: React.CSSProperties
} & LayoutAspectState

export default function AppMenu( {aspectState, toggleAspectState,style} : AppMenuProps){
    const mainStyle : React.CSSProperties = {
        zIndex : 9999,
        ...style
    }
    return (<div style={mainStyle}>
        <AppAvatar aspectState={aspectState} toggleAspectState={toggleAspectState}/>
    </div>)
}