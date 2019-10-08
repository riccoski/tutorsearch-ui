import * as React from "react";
import classNames from "classnames";
import styles from "./Loader.module.scss";

type Inline = "centered";
type Size = "small" | "medium" | "large";

const Loader: React.FC<{
  active?: boolean;
  className?: string;
  inline?: Inline;
  inverted?: boolean;
  size?: Size;
}> = ({ active, className, inline, inverted, size = "medium" }) => (
  <div
    className={classNames(styles.loader, styles[size], className, {
      [styles.active]: active,
      [styles.centered]: inline === "centered",
      [styles.inverted]: inverted,
      [styles.inline]: inline
    })}
  />
);

Loader.displayName = "Loader";

export default Loader;
