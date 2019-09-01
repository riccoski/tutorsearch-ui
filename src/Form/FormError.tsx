import * as React from "react";
import * as styles from "./Form.module.scss";

const FormError: React.FC = ({ children }) => {
  if (!children) return null;
  return <span className={styles.error}>{children}</span>;
};

export default FormError;
