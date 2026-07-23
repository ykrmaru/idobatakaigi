import React, { useState } from "react";

import Main from "./Main";
import SignIn from "./SignIn";
import config from "../config.json";

const signInEnabled = config.signInEnabled;

export default () => {
  const [name, setName] = useState("");

  if (signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
