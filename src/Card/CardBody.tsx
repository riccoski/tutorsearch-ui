import * as React from "react";
import classNames from "classnames";
// import { ThemeContext } from "..";
import styles from "./Card.module.scss";

type CardBodyProps = {
  className?: string;
};

const CardBody: React.FC<CardBodyProps> = React.forwardRef<
  HTMLDivElement,
  CardBodyProps
>(({ children, className }, ref) => {
  // const { card: styles = defaultStyles } = React.useContext(ThemeContext);
  // const styles = themeStyles || defaultStyles;

  return (
    <div className={classNames(styles.body, className)} ref={ref}>
      {children}
    </div>
  );
});

export default CardBody;
