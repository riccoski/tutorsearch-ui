import * as React from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

interface Props {
  className?: string;
  flex?: boolean;
  style?: React.CSSProperties;
}

const Container: React.FC<Props> = ({
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
