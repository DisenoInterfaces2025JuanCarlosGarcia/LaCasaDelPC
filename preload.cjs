// Este archivo es necesario si usas contextIsolation: true
// Puedes exponer funciones seguras a la app React si quieres
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
hello: () => console.log("Hola desde Electron")
});