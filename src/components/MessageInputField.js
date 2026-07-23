import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: "2",
  },
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  return <div className={classes.root}>MessageInputField: {name}</div>;
};

export default MessageInputField;
