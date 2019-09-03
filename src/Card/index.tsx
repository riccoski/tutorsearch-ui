import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";
import Card from "./Card";

const CardBody: React.FC<{ className?: string }> = ({
  children,
  className
}) => <div className={classNames(styles.body, className)}>{children}</div>;

const CardImage: React.FC<{ alt?: string; src: string }> = ({ alt, src }) => (
  <img src={src} alt={alt} className={styles.image} />
);

const CardHeader: React.FC = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

const CardMeta: React.FC = ({ children }) => (
  <div className={styles.meta}>{children}</div>
);

const CardText: React.FC = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

const CardTitle: React.FC<{ size?: string }> = ({ children, size }) => (
  <div
    className={classNames(styles.title, { [styles.normal]: size === "normal" })}
  >
    {children}
  </div>
);

const CardFooter: React.FC<{ className?: string }> = ({
  children,
  className
}) => <div className={classNames(styles.footer, className)}>{children}</div>;

Card.displayName = "Card";

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Meta = CardMeta;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;
