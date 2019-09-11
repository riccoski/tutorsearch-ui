import * as React from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";

export interface FormActionsProps {
  [key: string]: any;
}

const FormActions: React.FC<FormActionsProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={classNames(styles.actions, className)} {...props}>
    {children}
  </div>
);

export default FormActions;
