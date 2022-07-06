function reporteDePasajeros(estaciones) {
    let resultado=[];
    let pasajeros = 200;
    for (let i=0; i<=estaciones; i++) {
        
        if (i>=5) {
            pasajeros+=40;
        }
        if (i>0 && i<5) {
            pasajeros+=20;
        }
        resultado.push("En la estación "+i+" hay "+pasajeros+" pasajeros arriba del tren");//// dentro
        //del ciclo FOR por la cantidad de iteraciones.
    }
    return resultado;
}
console.log(reporteDePasajeros(5));