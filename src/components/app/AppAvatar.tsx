import { useFavicon, useHover} from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import Avatar from "rsuite/Avatar";
import "./../../styles/components/avatar.less";
import { FlexboxGrid, Stack } from "rsuite";
import useAspectAppLayout from "../../hooks/useAspectAppLayout";
import AppBasicProps from "../../interfaces/AppBasicProps";
import useThemeAppLayout from "../../hooks/useThemeAppLayout";

const avatarImg = "./avatar-min.png";

export function AppAvatar({ style, children }: AppBasicProps) {
    useFavicon(avatarImg);
    const [avatarHoverRef, hovering] = useHover();
    const { aspectState, handleToggleAspect } = useAspectAppLayout();
    const { themeState } = useThemeAppLayout();
    const menuClassName = "avatar-menu-" + themeState;
    const onClick = () => {
        if (aspectState == "expand" && handleToggleAspect) handleToggleAspect()
    };
    const onDoubleClick = () => {
        if (aspectState == "collapse" && handleToggleAspect) handleToggleAspect()
    };
    const menuAnimateComand = (aspectState == "collapse") ? "show" : hovering ? "show" : "hide";
    const avatarHover = { scale: 2, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)" };
    const transition = { type: "spring", stiffness: 400, damping: 15 };
    return (
        <motion.div layout className={"container"} style={style}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            variants={variantsContainer} animate={aspectState}>
            <FlexboxGrid ref={avatarHoverRef} justify="center"> 
                <FlexboxGrid.Item colspan={6}><Avatar onClick={onClick}
                    draggable={false}
                    onDoubleClick={onDoubleClick}
                    size="lg"
                    as={motion.div} whileHover={avatarHover}
                    transition={transition} src={avatarImg} className="avatar"
                    style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    circle />
                    <Stack layout as={motion.div} className={menuClassName} variants={variantsMenu} animate={menuAnimateComand}>
                        {children}
                    </Stack>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <motion.div className="description" animate={aspectState} variants={variantsDescription}>
                <h1>PAFEPE</h1> <h3><b>BOOK!</b></h3>
            </motion.div>
        </motion.div>);
}

const variantsContainer: Variants = {
    expand: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    collapse: {
        left: 0,
        top: 20,
    }
}
const variantsDescription: Variants = {
    expand: {
        width: "100%",
        height: "100%",
    },
    collapse: {
        width: "0%",
        height: "0%",
        display: "none"
    }
}
const variantsMenu: Variants = {
    hide: {
        width: 0,
        minWidth: 0,
    },
    show: {
        width: 'auto',
        minWidth: 100,
    }
};