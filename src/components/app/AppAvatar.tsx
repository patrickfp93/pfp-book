import { useHover, useMeasure, useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import Avatar from "rsuite/Avatar";
import avatarImg from "./../../assets/avatar-min.png";
import "./../../styles/components/avatar.less";
import React from "react";
import { Stack} from "rsuite";
import useAspectAppLayout from "../../hooks/useAspectAppLayout";
import AppBasicProps from "../../interfaces/AppBasicProps";
import useThemeAppLayout from "../../hooks/useThemeAppLayout";

export function AppAvatar({ style, children }: AppBasicProps) {
    const [avatarHoverRef, hovering] = useHover();
    var [avatarRef, avatarSize] = useMeasure();
    const winSize = useWindowSize();

    const { aspectState, handleToggleAspect } = useAspectAppLayout();
    const { themeState } = useThemeAppLayout();

    const avatarStyle: React.CSSProperties = {
        ...style,
        width: avatarSize.width ?? 0,
        height: avatarSize.height ?? 0,
    };
    const variantsContainer: Variants = {
        expand: {
            left: ((winSize.width ?? 0) / 2) - (avatarSize.width ?? 0) / 2,
            top: ((winSize.height ?? 0) / 2) - (avatarSize.height ?? 0) / 2,
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

    const menuClassName = "avatar-menu-" + themeState

    const onClick = () => {
        if (aspectState == "expand" && handleToggleAspect) handleToggleAspect()
        //else if (onShowMenu) onShowMenu(!(showMenu ?? true))
    };

    const onDoubleClick = () => {
        if (aspectState == "collapse" && handleToggleAspect) handleToggleAspect()
    };

    const menuAnimateComand = (aspectState == "collapse") ? "show" : hovering ? "show" : "hide";

    return (<motion.div layout className={"container"} style={avatarStyle} transition={{ type: "spring", stiffness: 200, damping: 20 }} variants={variantsContainer} animate={aspectState}>
        <Stack ref={avatarHoverRef}>
            <Avatar onClick={onClick}
                onDoubleClick={onDoubleClick}
                ref={avatarRef} size="lg"
                as={motion.div} whileHover={{ scale: 2, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                src={avatarImg}
                className="avatar"
                style={{ backgroundColor: "rgba(0,0,0,0)" }}
                circle />

            <Stack layout as={motion.div} className={menuClassName} variants={variantsMenu} animate={menuAnimateComand}>
                {children}
            </Stack>
        </Stack>
        <motion.div className="description" animate={aspectState} variants={variantsDescription}>
            <h1>PAFEPE</h1> <h3><b>BOOK!</b></h3>
        </motion.div>
    </motion.div>);
}
