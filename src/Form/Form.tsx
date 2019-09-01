import * as React from "react";
import classNames from "classnames";
import * as styles from "Form.module.scss";

const Form: React.FC<{
  action?: string;
  className?: string;
  onSubmit?: React.FormEventHandler;
}> = ({ action, children, className, onSubmit, ...rest }) => {
  function handleSubmit(e: React.SyntheticEvent) {
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
