// Start program
function mostrarMenu(){
    console.log("GESTION DE TAREAS");
    console.log("1. Agregar tarea");
    console.log("2. Borrar tarea");
    console.log("3. Mostrar tareas");
    // Question option
    rl.question("Cual opcion desea elegir?: ", (option)=>{
        console.log(option)
        manejarOpcion(option);
    });  
}
// Manage options
function manejarOpcion(opcion){
    switch(opcion){
        case "1":
            console.log("Creando tarea...");
            crearTarea();
            break;
        case "2":
            console.log("Borrando tarea...");
            borrarTarea();
            break;
        case "3":
            console.log("Mostrando tareas...")
            console.log(tasks);
            mostrarMenu();
            break;
        case "4":
            console.log("Saliendo...");
            rl.close();
            break;
        default:
            console.log("Opcion invalida");
            mostrarMenu();
            break;
    }
}
// Create task
function crearTarea(){
    rl.question("Cual es el nombre de la tarea?: ", (name)=>{
        tasks.push(name);
        mostrarMenu();
    })
}
function borrarTarea(){
    rl.question("Cual tarea desea eliminar?: ", (name)=>{
        let index = tasks.indexOf(name);
        if (index !== -1){
            tasks.splice(index, 1);
            console.log("Tarea eliminada");
        } else{
            console.log("Tarea no encontrada");
        }
        mostrarMenu();
    })
}


//import readline 
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// Main
let tasks = [];
mostrarMenu();