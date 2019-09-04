import * as React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonProps = {
  as?: React.ComponentType;
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
};

enum ButtonColor {
  default = "default",
  primary = "primary",
  secondary = "secondary"
}

enum ButtonSize {
  default = "",
  large = "large",
  small = "small"
}

enum ButtonVariant {
  solid = "",
  outlined = "outlined",
  text = "text"
}

const Button: React.FC<ButtonProps> = ({
  as,
  children,
  color = ButtonColor.default,
  fluid,
  hidden,
  href,
  className,
  link,
  onClick,
  size = ButtonSize.default,
  style,
  type,
  variant = ButtonVariant.solid,
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
    style,
    ...rest
  };

  if (href)
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  return <Component {...props}>{children}</Component>;
};

Button.defaultProps = {
  // as: "button",
  color: ButtonColor.default,
  type: "Button",
  variant: ButtonVariant.solid
};

export default Button;
