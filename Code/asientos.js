function asientosDisponibles(asientos,numero){
    if (asientos.indexOf(numero) != -1) {

    return 'Felicitaciones, el asiento número '+ numero + ' está disponible';

    } else{
        return 'Lo sentimos, el asiento número '+ numero +' está ocupado, pero aún quedan '+ asientos.length  + ' asientos disponibles';
    }
    
}
/*
function asientosDisponibles(asientos, numero){
    if(asientos.indexOf(numero) != -1) {
        return "Felicitaciones, el asiento número " + numero + " está disponible";
    }else {
        return "Lo sentimos, el asiento número " + numero + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles";
    }
}*/
console.log(asientosDisponibles([1,2,3,4,5,6],7));

