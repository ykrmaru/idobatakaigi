import React from "react";
import { pushMessage } from "../firebase";

import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const MessageSubmitButton = ({ inputEl, name, text, setText }) => {
  return (
    <IconButton
      disabled={text.length === 0}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
        inputEl.current.focus();
      }}
    >
      <Send />
    </IconButton>
  );
};

export default MessageSubmitButton;
