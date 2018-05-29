import React, { Component } from "react";
import { clipboard } from "electron";
import TextField from "@material-ui/core/TextField";
import JWT from "../utils/JWT";

class App extends Component {
  componentDidMount() {
    console.log(
      JSON.parse(JWT.decodeAndGetPart(clipboard.readText("selection")))
    );
  }

  render() {
    return (
      <div>
        <TextField
          id="multiline-flexible"
          multiline
          value={clipboard.readText("selection")}
          margin="normal"
          readOnly
          fullWidth
        />
        <div id="result" />
      </div>
    );
  }
}

export default App;
