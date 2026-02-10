const taskClass = require("./task.js");
const { guardarDatos,cargarDatos } = require("./storage.js");

function cargarTareas(tareasGuardadas){
    tasks = tareasGuardadas;
}

function guardarTareas(){
    return tasks;
}

function listarTarea(res){
    res.json(tasks);
}

function crearTarea(req,res){
    const {title, status} = req.body;
    const task = new taskClass(Date.now(),title,status);
    tasks.push(task);
    res.json(task);
}

function borrarTarea(req,res){
    const {title} = req.body;
    let index = tasks.findIndex(task => task.title === title);
    if (index !== -1){
        tasks.splice(index, 1);
        res.json({message: "Tarea eliminada"});
    } else{
        res.status(404).json({message: "Tarea no encontrada"});
    }
}

function actualizarStatusTarea(req,res){
    const {title, status} = req.body;
    let task = tasks.find(task => task.title === title);
    if (task){
        task.status = status;
        res.json(task);
    } else{
        res.status(404).json({message: "Tarea no encontrada"});
    }
}
function buscarTarea(req,res){
    const {id} = req.params;
    let task = tasks.find(task => task.id === parseInt(id));
    if (task){
        res.json(task);
    } else{
        res.status(404).json({message: "Tarea no encontrada"});
    }
}

module.exports = {
    crearTarea,
    borrarTarea,
    listarTarea,
    cargarTareas,
    guardarTareas,
    actualizarStatusTarea,
    buscarTarea,
}