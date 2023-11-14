import LayoutAspectState from "../../interfaces/LayoutAspectState";
import { AppAvatar } from "./AppAvatar";

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