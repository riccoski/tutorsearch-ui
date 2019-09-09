import * as React from "react";
import styles from "./Card.module.scss";

const CardHeader: React.FC = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

export default CardHeader;
