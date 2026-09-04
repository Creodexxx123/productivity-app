import { app, BrowserWindow, Menu } from 'electron'

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 690,
  })

  win.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
})