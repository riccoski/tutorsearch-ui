import * as React from "react";
import classNames from "classnames";
import FormActions, { FormActionsProps } from "./FormActions";
import FormButton from "./FormButton";
import FormError from "./FormError";
import FormField, { FormFieldProps } from "./FormField";
import FormInput, { FormInputProps } from "./FormInput";
import FormTextArea, { FormTextAreaProps } from "./FormTextArea";
import styles from "./Form.module.scss";
import { ButtonProps } from "../Button";
import FormSelect, { FormSelectProps } from "./FormSelect";

interface FormComposition {
  Actions: React.FC<FormActionsProps>;
  Button: React.FC<ButtonProps>;
  Error: React.FC;
  Field: React.FC<FormFieldProps>;
  Input: React.FC<FormInputProps>;
  Select: React.FC<FormSelectProps>;
  TextArea: React.FC<FormTextAreaProps>;
}

interface Props {
  action?: string;
  className?: string;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> & FormComposition = ({
  action,
  children,
  className,
  onSubmit,
  ...rest
}) => {
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
Form.Select = FormSelect;
Form.TextArea = FormTextArea;

export default Form;
