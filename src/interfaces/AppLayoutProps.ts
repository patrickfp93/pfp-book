import React, { HTMLAttributes } from "react";
import { LayoutAspectStateEnum } from "./LayoutAspectState";

export default interface AppLayoutProps extends HTMLAttributes<HTMLDivElement>{
    stateSize? : LayoutAspectStateEnum,
    children? : React.ReactNode
}
