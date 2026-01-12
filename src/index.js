const {mostrarMenu} = require("./menu.js");
const {guardarDatos,cargarDatos} = require("./storage.js");
const {cargarTareas,guardarTareas} = require("./taskManager.js");
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
    await mostrarMenu();
    await salirApp();
}


console.log("Iniciando la aplicación...");
main();


