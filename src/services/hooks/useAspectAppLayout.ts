import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../context";
import { toggleAspect } from "../context/slices/aspectSlice";

export default function useAspectAppLayout(){
    const aspectState = useSelector((state: RootState) => state.aspect);
  const dispatch = useDispatch();
    const handleToggleAspect = () => {
        dispatch(toggleAspect("expand"));
    }
    return {aspectState,handleToggleAspect};
}