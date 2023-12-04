import { useSpring } from "@react-spring/web";
import { useEffect } from "react";

export type ToggleSpringProp = {
    states: ToogleSpringState
    value: boolean;
};

export type ToogleSpringState = {
    start : any,
    end : any 
}

export default function useToggleSpring({states :{start,end}, value: condition}: ToggleSpringProp) { 
    const actionConfigSpring = () => ({ ...start, config: { precision: 0.0001 } });   
    const [style, api] = useSpring(actionConfigSpring);
    useEffect(() => {
        const from = (condition) ? end : start;
        const to = (condition) ? start : end;
        api.start({ from, to, });
    }, [condition]);
    return style;
}
