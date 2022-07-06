function puedoIrAlBanco(diaDeLaSemana,horaActual){

    return horaActual>=10 && horaActual<15 && diaDeLaSemana !='Sabado' && diaDeLaSemana!='Domingo';

}
console.log(puedoIrAlBanco('Sabado',11));