let notas = [10,4,5,8,9,2,7];

let notasHastaEl100 = notas.map(function(numero){

    return numero * 10

});
console.log(notasHastaEl100);

let notasAprobadas = notas.filter(function(numero){
 return numero >= 7;

});

console.log(notasAprobadas);

let sumaNotas = notas.reduce(function(acumulador,numero){
    return acumulador + numero;

})
console.log(sumaNotas + " aca");

notas.forEach(function(valor,indice){
        //console.log(indice);
        //console.log(valor);
        console.log("En la posicion "+ indice + " tengo el valor " +valor);

});
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(numero){
    return numero.promedio >= 7 ;
});

let desaprobados = estudiantes.filter(function(numero){
    return numero.promedio < 7 ;
});

console.log(aprobados);
console.log(desaprobados);

//
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero){
    return numero - 1 ;
});
console.log(horariosAtrasados);

///
let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce(function(acumulador,vueltas){
    return acumulador + vueltas;
});
console.log((totalVueltas));

//
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(valor ,indice){

    console.log(indice +  " " + valor
    );
});
