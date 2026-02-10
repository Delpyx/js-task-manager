const app = require("./server.js");
const {guardarDatos,cargarDatos} = require("./storage.js");
const {cargarTareas,guardarTareas} = require("./taskManager.js");
const express = require("express");

let tasks = [];

async function iniciarApp(){
    const tasks = await cargarDatos();
    cargarTareas(tasks);
}
async function salirApp(){
    await guardarDatos(guardarTareas());
    console.log("Datos guardados. Saliendo...");
    process.exit();
}

async function main() {
    await iniciarApp();
    console.log("los datos se han cargado correctamente");
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
    process.on("SIGINT", salirApp);
}

main();





