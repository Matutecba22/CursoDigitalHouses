// funcion expresada

let suma = function(numeroA,numeroB){

    return numeroA + numeroB;

}
console.log(suma(10,1));

// funcion declarada

function restar (numeroC,numeroD){

    return numeroC - numeroD
}
console.log(restar(10,3));

//Ejemplo de Scope

let mensaje ='Hola';

function saludar(){
    let mensaje='Chau'
    return mensaje;
}

console.log(mensaje);
console.log(saludar());
// 

function esPar(n){
    return n % 2 ==0;
}
console.log(esPar(4));

// declarando 3 funcciones

function anterior (numero){
    return --numero
}
console.log(anterior(6));

function triple(numero){
    return numero * 3
}
console.log(triple(2));


function anteriorDelTriple(numero){
        let triplicar = triple(numero)// creamos la variable triplicar y llamamos a la funcion 
        //triple que multiplica el parametro ingresado 
    return anterior(triplicar) ; //llamamo al la funccion anterior (resta 1 al valor ingresado)
    // y le pasamos el valor de triplicar
    //en esta caso 3*3 = 9 - 1
    
}
console.log(anteriorDelTriple(3));