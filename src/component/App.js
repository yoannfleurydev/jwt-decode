import React, { Component } from "react";
import { clipboard } from "electron";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import JWT from "../utils/JWT";

class App extends Component {
  render() {
    const body = JSON.parse(
      JWT.decodeAndGetPart(clipboard.readText("selection"))
    );

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(body).map(key => {
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key}
                  </TableCell>
                  <TableCell>{body[key].toString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
