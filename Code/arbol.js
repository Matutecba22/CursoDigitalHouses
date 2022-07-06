function alturaArbolUtopico(cantidadCiclos){

    let altura = 0;

    if( cantidadCiclos <=3){

        altura += cantidadCiclos;
    }else if (cantidadCiclos >3){

        altura *=  2
    }
    return altura;
}
console.log(alturaArbolUtopico(4));