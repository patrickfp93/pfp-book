import AppLayoutProps from "../../interfaces/AppBasicProps";
import useThemeAppLayout from "./useThemeAppLayout";
import useAspect from "./useAspectAppLayout";
import { ToogleSpringState } from "./useToggleSpring";

export default function useAppLayout({ children} : AppLayoutProps){
    const {themeState} = useThemeAppLayout();
    const {aspectState} = useAspect();    
    const variants: ToogleSpringState = {
        start: {
            height: "50vh",
        },
        end: {
            height: "0vh",
        }
    }
    return {classNameExtention:themeState,variants,children,aspectState}
}