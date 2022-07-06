const auto = require('./cierreDeModulo1_1.js');

const concesionaria = {
    /* completar */
   autos: auto,
   buscarAuto : function(patente){
    if(patente == this.autos[0].patente){
     return this.autos[0] ;

    } else if(patente == this.autos[1].patente){
        return this.autos[1] ;
   
    } else {
        return null
    }

   
}
}
console.log(concesionaria.buscarAuto('APL123'));