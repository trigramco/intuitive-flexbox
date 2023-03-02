import React, { HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    id?: string;
    center?: boolean;
    vcenter?: boolean;
    hFull?: boolean;
}
export declare const VBox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default VBox;
