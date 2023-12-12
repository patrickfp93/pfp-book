import { animated } from "@react-spring/web";
import useToggleSpring, { ToogleSpringState } from "../../../services/hooks/useToggleSpring";
import { useEffect, useState } from "react";
import "./index.less";

const Div = animated.div;

const tooltipV: ToogleSpringState = {
    start: { opacity: 1 },
    end: { opacity: 0 }
}

type TooltipProps = {
    children: React.ReactNode,
    duration?: number
}

export default function Tooltip({ children, duration }: TooltipProps) {
    const [view, setView] = useState(true);
    useEffect(() => {
        if (view) {            
            setTimeout(() => {
                setView(false)
            }, duration ?? 1000);
        }
    }, [view, setView, duration])


    const tooltipStyle = useToggleSpring({ states: tooltipV, value: view })
    return (
        <Div className="tooltip" style={tooltipStyle}>{children}</Div>)
}