import * as React from "react";
import classNames from "classnames";
import FormError from "./FormError";
import * as styles from "./Form.module.scss";

type FormInputChangeHandler = (
  event: React.FormEvent<HTMLInputElement>,
  props: { name: string; value: string }
) => void;

const FormInput: React.FC<{
  className?: string;
  defaultValue?: string;
  error?: string;
  label?: string;
  name?: string;
  onChange?: FormInputChangeHandler;
  placeholder?: string;
  type?: string;
  value?: string;
}> = ({
  className,
  defaultValue,
  error,
  label,
  name,
  onChange,
  placeholder,
  type,
  value
}) => {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (onChange) {
      onChange(e, { name, value });
    }
  }
  return (
    <div className={classNames(className, styles.field, { error })}>
      <label>
        {label}
        <input
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
        />
        <FormError>{error}</FormError>
      </label>
    </div>
  );
};

FormInput.defaultProps = {
  type: "text"
};
