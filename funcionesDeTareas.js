let funcionesDeTareas = {
    leerJson : function(){
        const fs = require('fs');
        let tareasJson = fs.readFileSync("./tareas.json", 'utf-8');
        let tareas  = JSON.parse(tareasJson);
        console.log(tareas);
    }
    }

let listado = tareas.forEach(function(indice){
    console.log((indice + 1) + "-" + tareas.titulo + "-" + tareas.estado);

module.exports = funcionesDeTareas;

