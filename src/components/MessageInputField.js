import React from "react";
import { gravatarPath } from "../gravatar";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gridRow: "2",
    margin: "24px",
  },
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const gravatar = gravatarPath(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={gravatar} />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
