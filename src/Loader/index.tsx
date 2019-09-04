import * as React from "react";
import classNames from "classnames";
import styles from "./Loader.module.scss";

const Loader: React.FC<{ active?: boolean }> = ({ active }) => (
  <div
    className={classNames(styles.loader, {
      [styles.active]: active
    })}
  >
    <div className={styles.inner}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  </div>
);

Loader.displayName = "Loader";

export default Loader;
