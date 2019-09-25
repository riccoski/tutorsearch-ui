import * as React from "react";
import styles from "./Segment.module.scss";

interface Props {
  [key: string]: any;
}

const SegmentHeader: React.FC<Props> = ({ children }) => (
  <div className={styles.header}>
    <h2>{children}</h2>
  </div>
);

export default SegmentHeader;
