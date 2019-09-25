import * as React from "react";
import styles from "./Segment.module.scss";

interface Props {
  [key: string]: any;
}

const SegmentActions: React.FC<Props> = ({ children }) => (
  <div className={styles.actions}>
    <h2>{children}</h2>
  </div>
);

export default SegmentActions;
