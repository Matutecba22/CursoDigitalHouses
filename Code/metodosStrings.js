//ejemplo length

let mensaje = 'Gran dia para practicar JavaScript!';

console.log(mensaje.length);
//ejemplo indexOf


console.log(mensaje.indexOf('dia'));

// ejemplo slice

console.log(mensaje.slice(-10) + 'slice');

// ejemplo trim

console.log(mensaje.trim());

// ejemplo split

console.log(mensaje.split(' '));

// ejemplo replace

console.log(mensaje.replace("JavaScript","Todo"));

//

let texto = "Hola ¿cómo estás?";

function reemplazoFastFast (){
    let textoReemplazado = texto.replace('estás','están');
    return textoReemplazado; 

}
console.log(reemplazoFastFast());