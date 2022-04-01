
let funcionesDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];



switch (accion) {
    case "listar":
        tareas = funcionesDeTareas.leerJson();

        console.log("Listado de Tareas: ");

        



        break;

    case "":
        console.log("Atencion - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo que queres hacer");
        break;
}

