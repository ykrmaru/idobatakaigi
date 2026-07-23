import React from "react";
import { gravatarPath } from "../gravatar";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      ></ListItemText>
    </ListItem>
  );
};

export default MessageItem;
