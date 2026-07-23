import React, { useState, useEffect } from "react";
import { messagesRef } from "../firebase";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: "1",
  },
});

const MessageList = ({ name }) => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        const entries = Object.entries(messages || {});
        const newMessages = entries.map(([key, nameAndText]) => {
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList: {name}</div>;
};

export default MessageList;
