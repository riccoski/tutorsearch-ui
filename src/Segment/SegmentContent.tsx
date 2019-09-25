import * as React from "react";
import styles from "./Segment.module.scss";

interface Props {
  [key: string]: any;
}

const SegmentContent: React.FC<Props> = ({ children }) => (
  <div className={styles.content}>
    <h2>{children}</h2>
  </div>
);

export default SegmentContent;
