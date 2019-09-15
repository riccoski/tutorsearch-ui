import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

export interface CardFooterProps extends StrictCardFooterProps {
  [key: string]: any;
}

export interface StrictCardFooterProps {
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
  <div className={classNames(styles.footer, className)}>{children}</div>
);

export default CardFooter;
