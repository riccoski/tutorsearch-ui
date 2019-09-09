import * as React from "react";
import styles from "./Card.module.scss";

const CardMeta: React.FC = ({ children }) => (
  <div className={styles.meta}>{children}</div>
);

export default CardMeta;
