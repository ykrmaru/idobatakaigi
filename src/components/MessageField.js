import React, { useState } from "react";
import { pushMessage } from "../firebase";

import { TextField } from "@material-ui/core";

const MessageField = ({ inputEl, name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      autoFocus
      fullWidth
      inputRef={inputEl}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text.length === 0) return;

        if (e.key === "Enter") {
          pushMessage({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={(e) => setIsComposed(false)}
    />
  );
};

export default MessageField;
