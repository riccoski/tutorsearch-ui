import * as React from "react";
import classNames from "classnames";

import FormActions, { FormActionsProps } from "./FormActions";
import FormButton from "./FormButton";
import FormError from "./FormError";
import FormField from "./FormField";
import FormInput, { FormInputProps } from "./FormInput";
import FormTextArea from "./FormTextArea";
import styles from "./Form.module.scss";

type Form<T> = React.FC<T> & {
  Actions?: React.FC<FormActionsProps>;
  Button?: React.FC;
  Error?: React.FC;
  Field?: React.FC;
  Input?: React.FC<FormInputProps>;
  TextArea?: React.FC;
};

const Form: Form<{
  action?: string;
  className?: string;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}> = ({ action, children, className, onSubmit, ...rest }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (typeof action !== "string") e.preventDefault();
    if (typeof onSubmit === "function") onSubmit(e);
  }
  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={handleSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};

Form.displayName = "Form";

Form.Actions = FormActions;
Form.Button = FormButton;
Form.Error = FormError;
Form.Field = FormField;
Form.Input = FormInput;
Form.TextArea = FormTextArea;

export default Form;
