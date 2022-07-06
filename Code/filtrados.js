function  saldosDeMesesConGanancia (unPeriodo) {
    let saldos = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        if(unPeriodo[i] > 0){
       
       saldos.push( unPeriodo[i]);

    }
    }
    return saldos;
}
console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10]));