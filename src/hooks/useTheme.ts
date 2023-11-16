import { useContext } from "react";
import { CustomContext } from "rsuite/esm/CustomProvider";

export default function useTheme(){
    const {theme} = useContext(CustomContext);
    return theme ?? "light";
}