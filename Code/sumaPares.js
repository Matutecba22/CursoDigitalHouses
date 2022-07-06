function sumaDeLosParesDel0Al(cantidad){
    let sumaNumeros = cantidad
    for ( i = 0 ; i < cantidad ; i++){
        if( i % 2==0){
        sumaNumeros = sumaNumeros + sumaNumeros + i

    
    }return sumaNumeros
    }
}
console.log(sumaDeLosParesDel0Al(20));

function sumaDeLosParesDel0Al(x){
    acumulador=0
    for(let i=0; i%2 == 0 && i <= x; i+=2){
        acumulador+=i
    }
    return acumulador
}