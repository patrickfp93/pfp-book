import React, { HTMLAttributes } from "react";

export default interface AppBasicProps extends HTMLAttributes<HTMLDivElement>{
    children? : React.ReactNode
}
