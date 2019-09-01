import * as React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

const CardBody: React.FC = ({ children, className }) => (
  <div className={classNames(styles.body, className)}>{children}</div>
);

const CardImage = ({ alt, src }) => (
  <img src={src} alt={alt} className={styles.image} />
);

const CardHeader = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

const CardMeta = ({ children }) => (
  <div className={styles.meta}>{children}</div>
);

const CardText = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

const CardTitle = ({ children, size }) => (
  <div
    className={classNames(styles.title, { [styles.normal]: size === "normal" })}
  >
    {children}
  </div>
);

const CardFooter = ({ children, className }) => (
  <div className={classNames(styles.footer, className)}>{children}</div>
);

const Card = React.forwardRef(
  ({ body, children, className, shadow, ...props }, ref) => (
    <div
      className={classNames(styles.card, className, {
        [styles.shadow]: shadow
      })}
      ref={ref}
      {...props}
    >
      {body ? <CardBody>{children}</CardBody> : children}
    </div>
  )
);

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Meta = CardMeta;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;
