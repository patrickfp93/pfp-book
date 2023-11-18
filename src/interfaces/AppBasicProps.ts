import React, { HTMLAttributes } from "react";

export default interface AppBasicProps extends HTMLAttributes<HTMLDivElement>{
    style?: React.CSSProperties,
    children? : React.ReactNode
}
