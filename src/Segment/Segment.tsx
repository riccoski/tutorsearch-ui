import * as React from "react";
import classNames from "classnames";

import styles from "./Segment.module.scss";
import SegmentActions from "./SegmentActions";
import SegmentContent from "./SegmentContent";
import SegmentHeader from "./SegmentHeader";

interface Props {
  [key: string]: any;
}

interface SegmentComposition {
  Actions: React.FC<Props>;
  Content: React.FC<Props>;
  Header: React.FC<Props>;
}

const Segment: React.FC<Props> & SegmentComposition = ({
  children,
  className = ""
}) => <div className={classNames(styles.segment, className)}>{children}</div>;

Segment.displayName = "Segment";

Segment.Actions = SegmentActions;
Segment.Content = SegmentContent;
Segment.Header = SegmentHeader;

export default Segment;
