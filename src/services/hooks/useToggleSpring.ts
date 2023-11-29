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

export default function useToggleSpring({states :{start,end}, value}: ToggleSpringProp) { 
    const actionConfigSpring = () => ({ ...start, config: { precision: 0.0001 } });   
    const [style, api] = useSpring(actionConfigSpring);
    useEffect(() => {
        const from = (value) ? end : start;
        const to = (value) ? start : end;
        api.start({ from, to, });
    }, [value]);
    return style;
}
