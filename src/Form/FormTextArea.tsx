import * as React from "react";
import classNames from "classnames";
import FormError from "./FormError";
import styles from "./Form.module.scss";

export interface FormTextAreaProps extends StrictFormTextAreaProps {
  [key: string]: any;
}

interface StrictFormTextAreaProps {
  error?: string;
  label?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  className,
  error,
  label,
  ...rest
}) => {
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
