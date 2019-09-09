import * as React from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";
import { FormActionsProps } from "./FormActions";
import { FormInputProps } from "./FormInput";

type TForm<T> = React.FC<T> & {
  Actions?: React.FC<FormActionsProps>;
  Button?: React.FC;
  Error?: React.FC;
  Field?: React.FC;
  Input?: React.FC<FormInputProps>;
  TextArea?: React.FC;
};

const Form: TForm<{
  action?: string;
  className?: string;
  onSubmit?: (e?: React.FormEvent<Element>) => void;
}> = ({ action, children, className, onSubmit, ...rest }) => {
  function handleSubmit(e: React.FormEvent<Element>) {
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

export default Form;
