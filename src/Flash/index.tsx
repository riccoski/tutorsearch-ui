import * as React from "react";
import classNames from "classnames";
import * as styles from "./Flash.module.scss";

const Flash: React.FC<{
  alert?: boolean;
  error?: boolean;
  hidden?: boolean;
  notice?: boolean;
  success?: boolean;
}> = ({ alert, children, error, hidden, notice, success }) => {
  if (hidden) return null;
  const className = classNames(styles.flash, {
    [styles.error]: error,
    [styles.success]: success,
    [styles.alert]: alert,
    [styles.notice]: notice
  });
  return <div className={className}>{children}</div>;
};

export default Flash;
