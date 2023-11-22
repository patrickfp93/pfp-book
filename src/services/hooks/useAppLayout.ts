import { useWindowSize } from "@uidotdev/usehooks";
import { Variants } from "framer-motion";
import AppLayoutProps from "../../interfaces/AppBasicProps";
import useThemeAppLayout from "./useThemeAppLayout";
import useAspect from "./useAspectAppLayout";

export default function useAppLayout({ children, style, ...props} : AppLayoutProps){
    const {themeState} = useThemeAppLayout();
    const size = useWindowSize();
    const {aspectState} = useAspect();
    
    const variants: Variants = {
        expand: {
            height: ((size.height ?? 0) / 2) + "px",
        },
        collapse: {
            height: "0px",
        }
    }
    return {classNameExtention:themeState,variants,children,aspectState, style, ...props}
}