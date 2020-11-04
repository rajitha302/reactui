import React from "react";
import Button from "@material-ui/core/Button";

export default function Btn(props) {
  return (
    <Button
      size='large'
      fullWidth
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {" "}
      {props.children}{" "}
    </Button>
  );
}
