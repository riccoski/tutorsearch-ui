import * as React from "react";
import classNames from "classnames";
import { useClickOutside, useToggleState } from "../hooks";
import * as styles from "./Dropdown.module.scss";

type DropdownOption = {
  key: string;
  text: string;
  value: number | string;
};

const DropdownItem: React.FC<{
  onSelect: Function;
  selected: boolean;
  text: string;
  value: number | string;
}> = ({ onSelect, selected, text, value }) => {
  function handleClick() {
    onSelect(value);
  }

  return (
    <li
      role="option"
      aria-selected={selected}
      className={classNames(styles.item, {
        [styles.active]: selected
      })}
      onClick={handleClick}
    >
      {text}
    </li>
  );
};

interface DropdownProps {
  name?: string;
  onChange?: Function;
  options: Array<DropdownOption>;
  placeholder?: string;
  style?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  onChange,
  options,
  placeholder = "Click to select",
  style
}) => {
  const [selected, setSelected] = React.useState();
  const { open, handleOpen, handleClose } = useToggleState();
  const [ref] = useClickOutside(handleClose);
  const activeOption = options.find(opt => opt.value === selected);

  React.useEffect(() => {
    if (onChange) {
      onChange(null, {
        name,
        value: selected
      });
    }
  }, [name, onChange, selected]);

  /**
   *
   * @param {String|Number} selected
   */
  function handleSelect(selected: string | number) {
    setSelected(selected);
    handleClose();
  }

  return (
    <div ref={ref} className={styles.dropdown} style={style}>
      <div className={styles.container}>
        <p onClick={handleOpen} className={styles.button}>
          {activeOption ? activeOption.text : placeholder}
        </p>
        <ul
          className={classNames(styles.menu, {
            [styles.isOpen]: open
          })}
        >
          {options.map((option: DropdownOption, index: number) => (
            <DropdownItem
              key={option.key}
              selected={selected ? selected === option.value : index === 0}
              onSelect={handleSelect}
              value={option.value}
              text={option.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
