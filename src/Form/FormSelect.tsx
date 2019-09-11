import * as React from "react";
import styles from "./Form.module.scss";

interface Props {
  defaultValue?: string | string[] | undefined;
  label?: string;
  name?: string;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    args: { name: string; value: string }
  ) => void;
}

const Select: React.FC<Props> = ({
  children,
  defaultValue,
  name,
  onChange
}) => {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.currentTarget;

    if (onChange) {
      onChange(e, { name, value });
    }
  }
  return (
    <div className={styles.select}>
      <select name={name} onChange={handleChange} defaultValue={defaultValue}>
        {children}
      </select>
    </div>
  );
};

export default Select;
