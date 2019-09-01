import * as React from "react";
import * as styles from "./Table.module.scss";

const Table: React.FC = ({ children, ...props }) => (
  <table className={styles.table} {...props}>
    {children}
  </table>
);

Table.displayName = "Table";

export default Table;
