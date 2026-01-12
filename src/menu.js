const {crearTarea,borrarTarea,listarTarea} = require("./taskManager.js")
const readline = require("readline");
function preguntar(pregunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(pregunta, respuesta => {
      rl.close();
      resolve(respuesta);
    });
  });
}

async function mostrarMenu(){
    let salir = false;

    while(!salir){
        console.log("GESTION DE TAREAS");
        console.log("1. Agregar tarea");
        console.log("2. Borrar tarea");
        console.log("3. Mostrar tareas");
        console.log("4. Salir")
        const opcion = await preguntar("Cual opcion desea elegir?: ");
        switch(opcion){
            case "1":
                const name = await preguntar("Cuál es la tarea?: ");
                crearTarea(name);
                break;
            case "2":
                const nameToDelete = await preguntar("Cual tarea desea borrar? ");
                borrarTarea(nameToDelete);
                break;
            case "3":
                listarTarea();
                break;
            case "4":
                salir = true;
                break;
            default:
                console.log("Opcion invalida");
        }
    }
}
// function preguntarTarea(){
//     rl.question("Cuál es la tarea?: ", (name) => {
//     crearTarea(name);
//     mostrarMenu(); 
//   });
// }
// async function mostrarMenu(){
//     console.log("GESTION DE TAREAS");
//     console.log("1. Agregar tarea");
//     console.log("2. Borrar tarea");
//     console.log("3. Mostrar tareas");
//     console.log("4. Salir")
//     rl.question("Cual opcion desea elegir?: ", manejarOpcion);
// }
// function manejarOpcion(opcion){
//     switch(opcion){
//         case "1":
//             preguntarTarea();
//             break;
//         case "2":
//             rl.question("Cual tarea desea borrar? ",(name)=>{
//                 borrarTarea(name);
//                 mostrarMenu();
//             })
//             break;
//         case "3":
//             listarTarea();
//             mostrarMenu();
//             break;
//         case "4":
//             rl.close();
//             break;
//         default:
//             console.log("Opcion invalida");
//             mostrarMenu();
//             break;
//     }
// }


module.exports = {
    mostrarMenu,
}