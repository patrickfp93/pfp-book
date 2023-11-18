import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../context";
import { toggleTheme as toggle} from "../context/slices/themeSlice";

export default function useTheme(){
    const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch(toggle("dark"));
    }
    return {theme,toggleTheme};
}