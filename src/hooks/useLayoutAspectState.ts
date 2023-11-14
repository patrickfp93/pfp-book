import { useState } from "react";
import { LayoutAspectStateEnum, nextLayoutAspectState } from "../interfaces/LayoutAspectState";

export default function useLayoutAspectState(init? : LayoutAspectStateEnum){
    const [aspectState,setState] = useState(init?? "expand");

    const toggleAspectState = (newValue?: LayoutAspectStateEnum) =>{
        if (newValue){
            setState(newValue)
        }
        setState(nextLayoutAspectState(aspectState))
    }
    return {aspectState, toggleAspectState}
}