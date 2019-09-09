import * as React from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";

export interface FormFieldProps {
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames(styles.formField, className)} {...rest}>
      {children}
    </div>
  );
};

export default FormField;
