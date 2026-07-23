import React, { useState, useEffect } from "react";
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem";

import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gridRow: "1",
    width: "100%",
    overflow: "auto",
  },
});

const MessageList = ({ name }) => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        const entries = Object.entries(messages || {});
        const newMessages = entries.map(([key, nameAndText]) => {
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
