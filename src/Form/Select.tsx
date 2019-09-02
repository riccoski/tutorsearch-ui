import React from 'react';
import styles from './Form.module.scss';

const Select = ({ children, defaultValue, label, name, onChange }) => {
  const handleChange = e => {
    const { name, value } = e.target;

    if (onChange) {
      onChange(e, { name, value });
    }
  };
  return (
    <div className={styles.select}>
      <select name={name} onChange={handleChange} defaultValue={defaultValue}>
        {children}
      </select>
    </div>
  );
};

export default Select;
