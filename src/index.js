const { app, dialog, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');

ipcMain.handle('say-hello', () => {
  dialog.showMessageBoxSync({message: "Hello, Electron!"});
});

app.on('ready', () => {

  const window = new BrowserWindow({ 
    show: false, 
    width: 800, 
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      sandbox: true
    }
  });

  window.on('ready-to-show', () => {
    window.show();
  });

  window.loadFile('index.html');
});
