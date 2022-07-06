const funcionesDeTareas = require('./funcionesDeTareas');


const accion = process.argv[2];

switch (accion){
    case 'listar': // node app listar
        funcionesDeTareas.listarLasTareas();
        break;
    case 'nueva':
        let nombreTareaNueva = process.argv[3];
        if(nombreTareaNueva){
            funcionesDeTareas.agregarUnaTareaNueva(nombreTareaNueva)
            funcionesDeTareas.listarLasTareas();
            break;
        }
        console.log("Error: Debe colocar un nombre");
        break;
    case 'completa': // node app completa <nroDeLaTarea>
        let nroDeLaTareaCompleta = process.argv[3];
        if(nroDeLaTareaCompleta){
            funcionesDeTareas.pasarTareaAListo(nroDeLaTareaCompleta)
            funcionesDeTareas.listarLasTareas();
            break;
        }
        console.log("Error: Debe colocar un numero");
        break;
    case 'eliminar': // node app eliminar <nroDeLaTarea>
        let nroDeLaTareaParaEliminar = process.argv[3];
        if(nroDeLaTareaParaEliminar){
            funcionesDeTareas.eliminarUnaTarea(nroDeLaTareaParaEliminar)
            funcionesDeTareas.listarLasTareas();
            break;
        }
        console.log("Error: Debe colocar un numero");
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer');
}