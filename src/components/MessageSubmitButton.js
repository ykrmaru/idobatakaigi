import React, { useState } from "react";
import { pushMessage } from "../firebase";

import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const MessageSubmitButton = ({ name, text, setText }) => {
  return (
    <IconButton
      disabled={text.length === 0}
      onClick={() => {
        pushMessage({ name: "まるさん", text });
        setText("");
      }}
    >
      <Send />
    </IconButton>
  );
};

export default MessageSubmitButton;
