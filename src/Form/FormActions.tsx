import * as React from "react";
import classNames from "classnames";
import * as styles from "./Form.module.scss";

const FormActions: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => (
  <div className={classNames(styles.actions, className)} {...props}>
    {children}
  </div>
);

export default FormActions;
