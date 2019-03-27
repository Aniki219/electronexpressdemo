const {app, BrowserWindow, electron} = require('electron')
require('./app.js')
require('electron-reload')(__dirname);

let mainWindow = null

function main() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    }
  })
  mainWindow.loadURL(`http://localhost:3000/`)
  mainWindow.on('close', event => {
    mainWindow = null
  })
}

app.on('ready', main)
