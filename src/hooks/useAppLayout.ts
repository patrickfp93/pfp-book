import { useWindowSize } from "@uidotdev/usehooks";
import { Variants } from "framer-motion";
import AppLayoutProps from "../interfaces/AppLayoutProps";
import useTheme from "./useTheme";

export default function useAppLayout({ stateSize = "expand", children, style, ...props} : AppLayoutProps){
    const classNameExtention = useTheme();
    const size = useWindowSize();    
    const variants: Variants = {
        expand: {
            height: ((size.height ?? 0) / 2) + "px",
        },
        collapse: {
            height: "0px",
        }
    }
    return {classNameExtention,variants,stateSize,children, style, ...props}
}