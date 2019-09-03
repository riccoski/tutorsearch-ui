import * as React from "react";
import classNames from "classnames";
import styles from "./Layout.module.scss";

const Container: React.FC<{ className?: string; flex?: boolean }> = ({
  children,
  className,
  flex = false,
  ...props
}) => (
  <div
    className={classNames(className, styles.container, { [styles.flex]: flex })}
    {...props}
  >
    {children}
  </div>
);

export default Container;
