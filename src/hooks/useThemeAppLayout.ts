import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../context";
import { toggleTheme} from "../context/slices/themeSlice";

export default function useThemeAppLayout(){
    const themeState = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(toggleTheme("dark"));
    }
    return {themeState,handleToggleTheme};
}