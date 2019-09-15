import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardMetaProps extends StrictCardMetaProps {
  [key: string]: any;
}

interface StrictCardMetaProps {
  className?: string;
}

const CardMeta: React.FC<CardMetaProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={classNames(styles.meta, className)} {...rest}>
    {children}
  </div>
);

export default CardMeta;
