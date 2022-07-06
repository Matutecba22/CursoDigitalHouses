// ejemplo ARRAY

let amigos= ['Mauricio','Fernando','Matias'];

let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);

// Ejemplo objetos

let persona = {
    nombre : "Matias",
    edad : 26,
    domicilio: "Calle Falsa 123"

}
let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);