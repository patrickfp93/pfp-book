import useToggle from "ahooks/lib/useToggle"
import { Col, CustomProvider} from "rsuite"
import { ptBR } from "rsuite/esm/locales"
import { useRef } from "react";
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import MyProjects from "./pages/MyProjects"
import {useWindowSize } from "@uidotdev/usehooks"
import { useSize } from "ahooks"
import { motion } from "framer-motion";
import './App.style.css'
import AppTop from "./components/app_2/AppTop";

function App() {
  const [h_c_state, h_c_action] = useToggle(true);
  const appTopRef = useRef(null);
  const pageSize = useWindowSize();
  const navBarSize = useSize(appTopRef);
  const pageHeight = (pageSize.height ?? 0) - (navBarSize?.height ?? 0);
  const contentStyle = { minHeight: pageHeight, boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.4)", background: "rgba(255, 255, 255, 0.1)" };
  const contentTouchStyle = { ...contentStyle, boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.4)", background: "rgba(255, 255, 255, 0.2)" };
  return (
    <CustomProvider theme={(h_c_state) ? "high-contrast" : "light"} locale={ptBR}>
      <AppTop ref={appTopRef} theme_state={h_c_state} change_state={h_c_action.toggle} />
      <Content
        className={(h_c_state) ? "content-background-dark" : "content-background-light"}>
        <FlexboxGrid justify="center" align="top">
          <FlexboxGrid.Item as={Col} lg={12} md={16} sm={20} colspan={24} >
            <motion.div whileHover={contentTouchStyle} style={contentStyle}>
              <MyProjects /></motion.div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer></Footer>
    </CustomProvider>
  )
}

export default App
