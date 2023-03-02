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
  wFull?: boolean;
  hFull?: boolean;
  spaceBetween?: boolean;
  center?: boolean;
  vcenter?: boolean;
  style?: Record<string, unknown>;
  wrap?: boolean;
}

export const HBox = forwardRef<HTMLDivElement, Props>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      className,
      id,
      wFull,
      hFull,
      spaceBetween,
      center,
      vcenter,
      style,
      wrap,
      ...other
    } = props;

    let classes = "flex";
    classes = className ? classes.concat(` ${className}`) : classes;
    classes = center ? classes.concat(" justify-center") : classes;
    classes = vcenter ? classes.concat(" items-center") : classes;
    classes = spaceBetween ? classes.concat(" justify-between") : classes;
    classes = wFull ? classes.concat(" w-full") : classes;
    classes = hFull ? classes.concat(" h-full") : classes;
    classes = wrap ? classes.concat(" flex-wrap") : classes;
    return (
      <div className={classes} id={id} style={style} {...other} ref={ref}>
        {children}
      </div>
    );
  }
);

HBox.displayName = "HBox";

export default HBox;
