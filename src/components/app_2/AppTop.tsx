//lib imports
import Affix from "rsuite/Affix";
import Navbar from "rsuite/Navbar";
import Nav from "rsuite/Nav";
import Stack from "rsuite/Stack";
import Avatar from "rsuite/Avatar";
import Notification from "rsuite/Notification";
import {motion} from "framer-motion";
import { MdSettings, MdHome, MdLightbulbOutline, MdLightbulb ,MdInfo} from "react-icons/md"
//projects imports
import me_img from "./../../assets/me_anime_block.png"; 
import { useHover } from "@uidotdev/usehooks";
import { MouseEventHandler } from "react";
import AppMenu from "./AppMenu";

type AppTopProps = {
    theme_state : boolean,
    change_state : MouseEventHandler<HTMLElement>,
    ref : React.MutableRefObject<null>
}

export default function AppTop(props : AppTopProps){
    const avatarDetailsStyle = {
      on: {
        width: '320px',
        minHeight: '100px',
        x:"40px",
        marginRight: "20px",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.4)",
      },
      off: {
        width: "0px",
        height: '0px',
        background: "rgba(255, 255, 255, 0.0)",
        borderStyle:"none"
      }
    };
    const items = [
        {
          title: "Home",
          icon : <MdHome size="2em"/>,
          itemProps : {eventKey:"Home"}
        },
        {
          title: "Sobre",
          icon : <MdInfo size="2em"/>,
          itemProps : {eventKey:"Sobre"}
        },
    ]

    const [refAvatar, hoverAvatar] = useHover();
    return(<Affix>
        <Navbar>
          <Navbar.Brand href="#">
            <Stack>
              <Stack>
                <Avatar ref={refAvatar} as={motion.div} whileHover={{ scale: 2.5, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)"}}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  src={me_img} circle />
              </Stack>
              <Stack>
                <Notification header="Seja bem vindo!"as={motion.div} animate={(hoverAvatar) ? avatarDetailsStyle.on : avatarDetailsStyle.off}>
                  <p style={{marginBottom: "20px"}}>
                    Meu nome é <b>Patrick</b>. <i>Clique</i> para me conhecer.
                  </p>
                </Notification>
              </Stack>
            </Stack>
          </Navbar.Brand>
          <AppMenu items={items}/>
          <Nav pullRight>
            <Nav.Item onClick={props.change_state} icon={(props.theme_state) ? <MdLightbulbOutline /> : <MdLightbulb />}></Nav.Item>
            <Nav.Item icon={<MdSettings />}>Settings</Nav.Item>
          </Nav>
        </Navbar>
      </Affix>);
}