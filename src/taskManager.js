const taskClass = require("./task.js");
const { guardarDatos,cargarDatos } = require("./storage.js");

function cargarTareas(tareasGuardadas){
    tasks = tareasGuardadas;
}
function guardarTareas(){
    return tasks;
}
function listarTarea(){
    console.log(tasks);
}

function crearTarea(name){
    const task = new taskClass(Date.now(),name,"pendiente");
    tasks.push(task);
}
function borrarTarea(name){
    let index = tasks.findIndex(task => task.title === name);
    if (index !== -1){
        tasks.splice(index, 1);
        console.log("Tarea eliminada");
    } else{
        console.log("Tarea no encontrada");
    }
}
let tasks = cargarDatos();
module.exports = {
    crearTarea,
    borrarTarea,
    listarTarea,
    cargarTareas,
    guardarTareas,
}