const funcionesDeArchivo = require('./funcionesDeArchivo');
/**
 * 
 * En este modulo, solo nos vamos a preocupar por: 
 * 1)listar las tareas
 * 2)guardar una tarea nueva
 * 3)pasar una tarea a listo
 * 4)eliminar una tarea
 * 
 * 
 * como leemos la informacion de un archivo o como guardamos 
 * la infomacion en un archivo, son tareas del modulo funcionesDeArchivo 
 * que importamos y consumimos segun necesitemos
 * 
 */


function listarLasTareas(){

  /**
   * traemos las tareas del archivo 
   */
  const tareas = funcionesDeArchivo.leerDeUnArchivo();

  /**
  *  con el bucle for listamos las tareas. 
  *  Esto se puede hacer de otras maneras. Los invito a implementar un while o un forEach
  */
  console.log("\n\n Listado de tareas. \n \n - - - - - - - - - - - - - - - - - - - -")
    for(let i = 0; i < tareas.length; i++) {
      // console.log(i) // muestra el valor de i 
      // tareas[i] // retorna el objeto que esta en la posicion i del arreglo
      // tareas[i].titulo // de esta manera podemos acceder al titulo del objeto que esta en la posicion i del arreglo
      console.log(i+1 + ". " + tareas[i].titulo + " - " + tareas[i].estado);
    }    

}


function agregarUnaTareaNueva(tituloDeLaTarea){

  /**
  * traemos las tareas del archivo 
  */
  const tareas = funcionesDeArchivo.leerDeUnArchivo();

  /**
   * creamos un objeto tarea con el estado pendiente y el titulo de la tarea que recibimos 
   * por parametro en la funcion
   */
  const tareaNueva = {
    titulo: tituloDeLaTarea,
    estado: "pendiente"
  }

  /**
   *  push es uno de los metodos nativos que tienen los arreglos. Con este metodo
   *  agregamos la tarea al final del arreglo  
   */
  tareas.push(tareaNueva);

  /**
   * guardamos el arreglo con la nueva tarea
   */
  funcionesDeArchivo.guardarEnUnArchivo(tareas);
}


/**
 * En esta funcion recibimos la posicion de la tarea en el arreglo que deseamos pasar como terminada 
 */
function pasarTareaAListo(indexDeLaTarea){

  /**
  * traemos las tareas del archivo 
  */
  const tareas = funcionesDeArchivo.leerDeUnArchivo();

  /**
   *  map es otro metodo nativo de los arreglos, este nos retorna un arreglo y mediante el callback 
   *  nos permite manipular los elementos del arreglo que estamos recorreindo, dichos elementos manipulados 
   *  seran los que conformen el arreglo que retorna el metodo map 
   */
  const tareasMapeadas = tareas.map(function(tarea, index){

    /**
     *  condicion que se tiene que cumplir para cambiar el estado de una tarea a terminado
     *  si se cumple, la cabiamos, sino la dejamos como esta.
     *  NOTA: el callback de map nos obliga a retornar un elemento, porque con dicho elemento construlle 
     *  el nuevo arreglo que retorna map. Por eso retornamos la tarea tanto en el if como en el else 
     */
    if(index + 1 == indexDeLaTarea){
      tarea.estado = "terminada";
      return tarea;
    }else{
      return tarea;
    }
    
  });

  /**
   * guardamos el arreglo con la nueva tarea
   */
  funcionesDeArchivo.guardarEnUnArchivo(tareasMapeadas);

  /**
   * Desafio: recorrer las tareas y editarlas tambien se puede hacer con un for o con un while. los invito a 
   * que lo intenten 
   */
}


/**
 * En esta funcion recibimos la posicion de la tarea en el arreglo que deseamos eliminar 
 */
function eliminarUnaTarea(indexDeLaTarea){
  const tareas = funcionesDeArchivo.leerDeUnArchivo();

  /**
   *  filter es otro metodo nativo de los arreglos. Al igual que map, tambien nos retorna un 
   *  arreglo nuevo. En este caso el arreglo nuevo esta compuesto por aquellos elementos que 
   *  complan con la condicion que implementamos en el callback
   *  Esta vez uso una funcion flecha o arrowfunction para implementar el callback
   */
  const tareasFiltradas = tareas.filter((tarea, index) => index + 1 != indexDeLaTarea);

  /**
   *  guardamos las tareas filtradas 
   */
  funcionesDeArchivo.guardarEnUnArchivo(tareasFiltradas);
}

module.exports = {
  listarLasTareas: listarLasTareas,
  agregarUnaTareaNueva: agregarUnaTareaNueva,
  pasarTareaAListo: pasarTareaAListo,
  eliminarUnaTarea: eliminarUnaTarea
}
