import "./index.less";
import { Header } from "rsuite";
import AppBasicProps from "../../../interfaces/AppBasicProps";
import useAppLayout from "../../../services/hooks/useAppLayout";
import useToggleSpring from "../../../services/hooks/useToggleSpring";
import { animated } from "@react-spring/web";
const Div = animated.div;
export default function AppHeader( super_props : AppBasicProps) {
    const {classNameExtention,variants,aspectState,children} = useAppLayout(super_props);
    const className = "header-" + classNameExtention;
    const smokerClassName = "header-smoker-" + classNameExtention; 
    const backClass = "layout-base-back";
    const style = useToggleSpring({states: variants, value: aspectState === "expand" });
    return (<>
        <Div className={className} style={style}>
        <div className={smokerClassName}>
            {children}
        </div>
        </Div>        
        <Header className={backClass} style={{height:100}}></Header>
    </>);
}


