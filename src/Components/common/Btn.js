import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Btn(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant={props.variant}
        color={props.color}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {" "}
        {props.children}{" "}
      </Button>
    </div>
  );
}
