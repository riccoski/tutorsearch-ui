import React from "react";
import classNames from "classnames";

import Form from "./Form";
import FormButton from "./FormButton";
import FormError from "./FormError";
import FormField from "./FormField";
import FormInput from "./FormInput";
import styles from "./Form.module.scss";

export const FormActions = ({ children, className, ...props }) => (
  <div className={classNames(styles.actions, className)} {...props}>
    {children}
  </div>
);

export function TextArea({ className, error, label, ...rest }) {
  return (
    <div className={classNames(className, styles.field, { error })}>
      <label>
        {label}
        <textarea {...rest} />
        <FormError message={error} />
      </label>
    </div>
  );
}

Form.displayName = "Form";

Form.Actions = FormActions;
Form.Button = FormButton;
Form.Error = FormError;
Form.Field = FormField;
Form.Input = FormInput;
Form.TextArea = TextArea;

export default Form;
