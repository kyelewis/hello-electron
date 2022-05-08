const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('hello', { 
  sayHello: () => ipcRenderer.invoke('say-hello') 
});
