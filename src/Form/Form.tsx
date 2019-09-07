import * as React from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";

type TForm<T> = React.FC<T> & {
  Actions?: React.ElementType;
  Button?: React.ElementType;
  Error?: React.ElementType;
  Field?: React.ElementType;
  Input?: React.ElementType;
  TextArea?: React.ElementType;
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
