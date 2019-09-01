// @ts-check
import * as React from "react";
import classNames from "classnames";
// import * as styles from "./Tabs.module.scss";
import ThemeContext from "../ThemeContext";

type TabItem = {
  label: string;
  render?: React.ElementType;
};

interface TabProps {
  items: Array<TabItem>;
}

function Tabs({ items }: TabProps) {
  const { tabs: styles } = React.useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <ul className={styles.tabs}>
      {items.map((item, index) => (
        <li key={`tabItem_${index}`} className={styles.item}>
          <button
            className={classNames(styles.link, {
              [styles.isActive]: activeIndex === index
            })}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </button>
          <div
            className={classNames(styles.content, {
              [styles.isOpen]: activeIndex === index
            })}
          >
            {item.render && <item.render />}
          </div>
        </li>
      ))}
    </ul>
  );
}

Tabs.displayName = "Tabs";
Tabs.defaultProps = {
  items: []
};

export default Tabs;
