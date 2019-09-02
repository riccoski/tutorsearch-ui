import * as React from "react";
import classNames from "classnames";
import * as styles from "./Button.module.scss";

export type ButtonProps = {
  as?: React.ComponentType;
  className?: string;
  color?: ButtonColor;
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
  default = "",
  primary = "primary",
  secondary = "secondary"
}

enum ButtonSize {
  large = "large",
  small = "small"
}

enum ButtonVariant {
  outlined = "outlined",
  solid = "solid",
  text = "text"
}

const Button: React.FC<ButtonProps> = ({
  as,
  children,
  hidden,
  href,
  className,
  link,
  onClick,
  size,
  style,
  type,
  variant,
  ...rest
}) => {
  if (hidden) return null;
  const Component = as || "button";
  const props = {
    className: classNames(
      styles.button,
      className,
      styles!.color,
      styles!.size,
      styles!.variant
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
  type: "Button",
  variant: ButtonVariant.solid
};

export default Button;
