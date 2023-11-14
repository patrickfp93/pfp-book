import React, { HTMLAttributes } from "react";

export default interface AppLayoutProps extends HTMLAttributes<HTMLDivElement>{
    stateSize? : "expand" | "collapse",
    children? : React.ReactNode
}
