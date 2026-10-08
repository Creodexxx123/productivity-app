import { app, BrowserWindow, Menu } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 690,
    // resizable: false,
    // maximizable: false,
    // fullscreenable: false,
    // minWidth: 1100,
    // maxWidth: 1100,
    // minHeight: 690,
    // maxHeight: 690,
  });
  // console.log("Resizeable:", win.isResizable());
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
});
