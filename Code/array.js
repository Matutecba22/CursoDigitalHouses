let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards","hola","hola!"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina","hola","mundo!"]
console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);
console.log(seriesFavoritasDeAna[3,4]);
console.log(seriesFavoritasDeAna[4]);
console.log(seriesFavoritasDeHector[2]);
console.log(seriesFavoritasDeHector[3]);

let nombres = ["Matias","Ignacio"];
let edades =[38,27,39,55];
let valoresDeVerdad = [true,false,false,true];
let variados = ["Matias",38,false,true,edades];

console.log(variados[0,4]);

//metodos Array

let notas = [3,5,10,9,7,8,8,8];
notas.push(1);
notas.push(2);
notas.push(4);

let elUltimo = notas.pop()// se almacena el la variale elUltimo el valor extraido por el .pop
console.log(notas);
console.log(elUltimo);

// shift y unshift
