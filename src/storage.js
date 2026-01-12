fs = require('fs').promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

async function guardarDatos(tasks){
    let json = JSON.stringify(tasks);
    await fs.writeFile(filePath,json);
    console.log("Datos guardados");
}
async function cargarDatos(){
    console.log("Cargando datos...");
    let json = await fs.readFile(filePath,"utf-8");
    return JSON.parse(json);
}
module.exports = {
    guardarDatos,
    cargarDatos,
}
