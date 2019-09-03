import * as React from "react";
import classNames from "classnames";
import FormError from "./FormError";
import styles from "./Form.module.scss";

const FormTextArea: React.FC<{
  className?: string;
  error?: string;
  label?: string;
}> = ({ className, error, label, ...rest }) => {
  return (
    <div className={classNames(className, styles.field, { error })}>
      <label>
        {label}
        <textarea {...rest} />
        <FormError>{error}</FormError>
      </label>
    </div>
  );
};

export default FormTextArea;
