let totalCalorias = 0; // Acá inicializo la variable totalCalorias con un valor de 0 (cero)

for( let i = 0 ; i < 5 ; i++ ){ 
       totalCalorias = totalCalorias + 300;  // Acá la variable, como ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia"
}function caloriasDeTrote(cantidadDeVueltas){

    let calorias= 5

    for(let i = 1 ; i < cantidadDeVueltas ; i++){

        calorias = calorias * i

    } return calorias
}

console.log(totalCalorias)