import React, { useState } from "react";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";
import MessageSubmitButton from "./MessageSubmitButton";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gridRow: "2",
    margin: "24px",
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const gravatar = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={gravatar} />
        </Grid>
        <Grid item xs={10}>
          <MessageField text={text} setText={setText} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
