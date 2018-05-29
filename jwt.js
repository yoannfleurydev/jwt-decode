const { clipboard } = require("electron");
const React = require("react");
const ReactDOM = require("react-dom");

const HEADER = 0;
const BODY = 1;

const decode = document.getElementById("jwt");
const result = document.getElementById("result");

decode.value = clipboard.readText("selection");
json = JSON.parse(decodeJWT(clipboard.readText("selection")));

ReactDOM.render(<h1>Hello World</h1>, result);

function decodeJWT(jwt, part = BODY) {
  return atob(jwt.split(".")[part]);
}
