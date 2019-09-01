import * as React from "react";
import Button, { ButtonProps } from "../Button";

function FormButton(props: ButtonProps) {
  return <Button type="submit" {...props} />;
}

FormButton.defaultProps = {
  type: "submit"
};

export default FormButton;
