import * as React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonProps = {
  as?: any;
  className?: string;
  color?: ButtonColor;
  fluid?: boolean;
  hidden?: boolean;
  href?: string;
  link?: string;
  onClick?: any;
  size?: ButtonSize;
  style?: React.CSSProperties;
  type?: string;
  variant?: ButtonVariant;
  [key: string]: any;
};

type ButtonColor = "default" | "primary" | "secondary";

type ButtonSize = "normal" | "large" | "small";

type ButtonVariant = "solid" | "outlined" | "text";

const Button: React.FC<ButtonProps> = ({
  as,
  children,
  color = "default",
  fluid,
  hidden,
  className,
  onClick,
  size = "normal",
  variant = "solid",
  ...rest
}) => {
  if (hidden) return null;
  const Component = as || "button";
  const props = {
    className: classNames(
      styles.button,
      className,
      styles[color],
      styles[size],
      styles[variant],
      {
        [styles.fluid]: fluid
      }
    ),
    onClick,
    ...rest
  };

  return <Component {...props}>{children}</Component>;
};

Button.defaultProps = {
  // as: "button",
  color: "default",
  type: "button",
  variant: "solid"
};

export default Button;
