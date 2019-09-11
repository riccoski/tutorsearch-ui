import * as React from "react";
import classNames from "classnames";
import FormError from "./FormError";
import styles from "./Form.module.scss";

type FormInputChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  props: { name: string; value: string }
) => void;

export interface FormInputProps extends StrictFormInputProps {
  [key: string]: any;
}

interface StrictFormInputProps {
  className?: string;
  defaultValue?: string;
  error?: string;
  label?: string;
  name?: string;
  onChange?: FormInputChangeHandler;
  placeholder?: string;
  type?: string;
  value?: string;
}

const FormInput: React.FC<FormInputProps> = ({
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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

export default FormInput;
