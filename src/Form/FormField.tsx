import * as React from "react";
import classNames from "classnames";
import * as styles from "./Form.module.scss";

const FormField: React.FC<{ className?: string }> = ({
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
