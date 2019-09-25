import * as React from "react";
import classNames from "classnames";

import styles from "./Segment.module.scss";

interface Props {
  [key: string]: any;
}

interface SegmentComposition {
  Actions: React.FC<Props>;
  Content: React.FC<Props>;
  Header: React.FC<Props>;
}

const Segment: React.FC<Props & SegmentComposition> = ({
  children,
  className = ""
}) => <div className={classNames(styles.segment, className)}>{children}</div>;

export default Segment;
