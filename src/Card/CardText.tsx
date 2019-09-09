import * as React from "react";
import styles from "./Card.module.scss";

const CardText: React.FC = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

export default CardText;
