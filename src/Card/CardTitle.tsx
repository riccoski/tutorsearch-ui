import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

export interface CardTitleProps {
  size?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, size }) => (
  <div
    className={classNames(styles.title, { [styles.normal]: size === "normal" })}
  >
    {children}
  </div>
);

export default CardTitle;
