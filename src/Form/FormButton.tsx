import * as React from "react";
import Button, { ButtonProps } from "../Button";

const FormButton: React.FC<ButtonProps> = props => {
  return <Button type="submit" {...props} />;
};

FormButton.defaultProps = {
  type: "submit"
};

export default FormButton;
