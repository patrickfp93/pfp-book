import { useMeasure, useWindowSize } from "@uidotdev/usehooks";
import { Variants, motion } from "framer-motion";
import Avatar from "rsuite/Avatar";
import avatarImg from "./../../assets/me_anime_block.png";
import AspectState from "../../interfaces/AspectState";
type AppAvatarProps = {
    style: React.CSSProperties | undefined
} & AspectState;

export function AppAvatar({ aspectState = true, toggleAspectState, style }: AppAvatarProps) {
    const [avatarRef, avatarSize] = useMeasure();
    const winSize = useWindowSize();
    const avatarStyle: React.CSSProperties = {
        zIndex: 9999,
        ...style
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

    return (<Avatar ref={avatarRef} style={avatarStyle} variants={variants} animate={(aspectState) ? "expand":"collapse"}  onClick={() => (toggleAspectState) ? toggleAspectState() : {}} size="lg"
        as={motion.div} whileHover={{ scale: 2, y: 0, x: 10, boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.4)" }}
        transition={{ type: "spring", stiffness: 85, damping: 10 }}
        src={avatarImg} circle />);
}
