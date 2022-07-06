const fs = require('fs');

/**
 * 
 * En este modulo, solo nos vamos a preocupar por leer infomacion de un archivo y 
 * por guardar informacion en un archivo. Para esto vamos a usar dos funciones:
 * leerDeUnArchivo()
 * guardarEnUnArchivo() 
 * 
 */


/**
 * En esta funcion, vamos leer la informacion de un archivo, en este caso, de tipo JSON. Dicha informacion
 * la pasamos a un formato amigable para que pueda ser manipulada y por ultimo la retornamos
 */


function leerDeUnArchivo(nombre="tareas.json") {
    /**
     * con el metodo readFileSync obtenemos la informacion del archivo que le pasamos en el primer parametro,
     * en este caso "tareas.json", y la guardamos en una variable. Dicha informacion la obtenemos en formato 
     * de tipo string, lo cual hace un poco complejo la utilizacion de la informacion obtenida
     */
    const tareasSTRING = fs.readFileSync(nombre, 'utf-8');

    /**
     * con el metodo parse le damos forma al string para poder ser manipulado de forma mas facil, 
     * la informacion que esta guardada en dicho string. En este caso, estamos pasado de 
     * un string a un arreglo de tareas, eso se debe a que en el archivo "tareas.json" hay un arreglo,
     * si tubieramos otra estructura de datos, como puede ser un objeto, pasariamos el string a un objeto
     */
    const tareasConvertidas = JSON.parse(tareasSTRING)

    /**
     * finalmente, retornamos la informacion  para que sea utilizada segun corresponda
     */
    return tareasConvertidas;
}


/**
 * En esta funcion vamos a recibir la informacion que deseamos persistir en formato JSON.
 * Dicha informacion la vamos a convertir a string para poder guardarla 
 * Este metodo no retorna nada por ahora
 */
function guardarEnUnArchivo(tareasQueQueremosGuardar) {

    /**
     * con el metodo stringify podemos pasar la informacion, en este caso es un arreglo,
     * a un string
     */
    const tareasSTRING = JSON.stringify(tareasQueQueremosGuardar);

    /**
     * con el metodo writeFileSync guardamos la informacion con formato string 
     * en un archivo con formato JSON. El metodo writeFileSync crea el archivo si no existe
     * y si existe lo vuelve a re escribir 
     * primer parametro: donde
     * segundo parametro: que 
     * tercer parametro: en que formato
     */
    fs.writeFileSync("./tareas.json", tareasSTRING, 'utf-8');// donde que y como 
}


module.exports = {
    leerDeUnArchivo: leerDeUnArchivo,
    guardarEnUnArchivo: guardarEnUnArchivo
};


// const persona = leerDeUnArchivo("persona.json");

// console.log(persona.direccion.numero)

// const entretenimientos = persona.entretenimientos
// console.log(entretenimientos)



// const tareas = leerDeUnArchivo("tareas.json");
// const unaTarea = tareas[1]
// console.log(unaTarea.titulo)



// function saludo(nombre="josema"){
//     console.log("hola" + nombre);
// }
// saludo() // muestra josema
// saludo("pepe") // muestra pepe


// function saludo2(nombre){
//     console.log("hola" + nombre);
// }
// saludo2() // muestra undefined