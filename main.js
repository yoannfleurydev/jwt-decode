const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600, frame: false });
  win.loadFile("src/index.html");
}

app.on("ready", createWindow);

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
