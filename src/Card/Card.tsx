import * as React from "react";
import classNames from "classnames";
import { ThemeContext } from "..";
import CardBody from "./CardBody";

type CardProps = {
  body?: React.ReactElement;
  className?: string;
  shadow?: boolean;
};

const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, CardProps>(
  ({ body, children, className, shadow, ...props }, ref) => {
    const { card: styles } = React.useContext(ThemeContext);

    return (
      <div
        className={classNames(styles.card, className, {
          [styles.shadow]: shadow
        })}
        ref={ref}
        {...props}
      >
        {body ? <CardBody>{children}</CardBody> : children}
      </div>
    );
  }
);

export default Card;
