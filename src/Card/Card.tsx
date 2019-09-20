import * as React from "react";
import classNames from "classnames";
// import { ThemeContext } from "..";
import CardBody, { CardBodyProps } from "./CardBody";
import styles from "./Card.module.scss";
import CardFooter, { CardFooterProps } from "./CardFooter";
import CardHeader from "./CardHeader";
import CardImage, { CardImageProps } from "./CardImage";
import CardMeta, { CardMetaProps } from "./CardMeta";
import CardText from "./CardText";
import CardTitle, { CardTitleProps } from "./CardTitle";

interface DefaultProps {
  [key: string]: any;
}

interface CardComposition {
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
  Header: React.FC<DefaultProps>;
  Image: React.FC<CardImageProps>;
  Meta: React.FC<CardMetaProps>;
  Text: React.FC<DefaultProps>;
  Title: React.FC<CardTitleProps>;
}

interface StrictCardProps {
  body?: React.ReactElement;
  className?: string;
  shadow?: boolean;
}

interface CardProps extends StrictCardProps {
  [key: string]: any;
}

const Card: React.FC<CardProps> & CardComposition = ({
  body,
  children,
  className,
  shadow,
  ...props
}) => {
  // const { card: styles } = React.useContext(ThemeContext);

  return (
    <div
      className={classNames(styles.card, className, {
        [styles.shadow]: shadow
      })}
      {...props}
    >
      {body ? <CardBody>{children}</CardBody> : children}
    </div>
  );
};

Card.displayName = "Card";

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Meta = CardMeta;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;
