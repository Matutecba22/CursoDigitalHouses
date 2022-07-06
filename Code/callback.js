/*let suma = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;


let calculadura = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadura(18, 3, dividir));
///// 
let doble = numero => numero * 2;
let triple = numero => numero * 3
let aplicarCallback = (numero, callback) => callback(numero);
console.log(aplicarCallback(9, doble));
*/
//

function agregarHttp(url) {
    return 'http://' + url
}
function procesar(array, funcion) {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(funcion(array[i]));
        //console.log(i);
    }
    return nuevoArray
}
console.log(procesar(["www.google.com", "www.yahoo.com"], agregarHttp));