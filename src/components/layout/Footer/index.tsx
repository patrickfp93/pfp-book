import "./index.less";
import Footer from "rsuite/Footer";
import AppBasicProps from "../../../interfaces/AppBasicProps";
import useAppLayout from "../../../services/hooks/useAppLayout";
import { animated } from "@react-spring/web";
import useToggleSpring from "../../../services/hooks/useToggleSpring";
const Div = animated.div;
export default function AppFooter(super_props : AppBasicProps) {
    const {classNameExtention,variants,aspectState,children} = useAppLayout(super_props);
    const className = "footer-" + classNameExtention;
    const smokerClassName = "footer-smoker-" + classNameExtention;
    const backClass = "layout-base-back";
    const style = useToggleSpring({states: variants, value: aspectState === "expand" });

    return (<>
        <Div className={className} style={style}>
        <div className={smokerClassName}>
            {children}
        </div>
        </Div>
        <Footer className={backClass} style={{height:30}}></Footer>
    </>);
}