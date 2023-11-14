import { useMeasure, useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import Avatar from "rsuite/Avatar";
import avatarImg from "./../../assets/me_anime_block.png";
import LayoutAspectState from "../../interfaces/LayoutAspectState";
type AppAvatarProps = {
    style?: React.CSSProperties
} & LayoutAspectState;

export function AppAvatar({ aspectState = "expand", toggleAspectState, style }: AppAvatarProps) {
    const [avatarRef, avatarSize] = useMeasure();
    const winSize = useWindowSize();
    const avatarStyle: React.CSSProperties = {
        zIndex: 9999,
        ...style,
        width: avatarSize.width??0,
        height: avatarSize.height??0,
        position:"fixed"
    };
    const variants: Variants = {
        expand: {
            left: ((winSize.width ?? 0) / 2) - (avatarSize.width ?? 0) / 2,
            top: ((winSize.height ?? 0) / 2) - (avatarSize.height ?? 0) / 2,
        },
        collapse: {
            left: 0,
            top: 0,
        }
    }

    return (<motion.div style={avatarStyle} transition={{type:"spring", stiffness: 200, damping: 20}} variants={variants} animate={aspectState} onClick={() => (toggleAspectState) ? toggleAspectState() : {}} >
        <Avatar ref={avatarRef} size="lg"
            as={motion.div} whileHover={{ scale: 2, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)" }}
            transition={{type:"spring", stiffness: 400, damping: 15}}
            src={avatarImg} circle />
    </motion.div>);
}
