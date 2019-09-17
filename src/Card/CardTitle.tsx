import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

export interface CardTitleProps extends StrictCardTitleProps {
  [key: string]: any;
}

interface StrictCardTitleProps {
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
