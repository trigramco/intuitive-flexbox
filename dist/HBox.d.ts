import React, { HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    id?: string;
    wFull?: boolean;
    hFull?: boolean;
    spaceBetween?: boolean;
    center?: boolean;
    vcenter?: boolean;
    style?: Record<string, unknown>;
    wrap?: boolean;
}
export declare const HBox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default HBox;
