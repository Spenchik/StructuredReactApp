import React from "react";
import ReactDOM from "react-dom";

import { ButtonComponent } from "./button/button.component";

import { InputCompponent } from "./input/input.component";

import "./styles.css";

function LoginContainer() {
  return (
    <div>
      <InputCompponent name={"username"} />
      <InputCompponent name={"password"} />
      <ButtonComponent
        name={"Login"}
        onClick={() => {
          console.log("collect all and send to server");
        }}
      />
    </div>
  );
}

function App() {
  return <LoginContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
