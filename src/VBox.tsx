import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  center?: boolean;
  vcenter?: boolean;
  hFull?: boolean;
}

export const VBox = forwardRef<HTMLDivElement, Props>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, className, id, center, vcenter, hFull, ...other } = props;

    let classes = "flex flex-col";
    classes = className ? classes.concat(` ${className}`) : classes;
    classes = center ? classes.concat(" items-center") : classes;
    classes = vcenter ? classes.concat(" justify-center") : classes;
    classes = hFull ? classes.concat(" h-full") : classes;
    return (
      <div className={classes} id={id} {...other} ref={ref}>
        {children}
      </div>
    );
  }
);

VBox.displayName = "VBox";

export default VBox;
