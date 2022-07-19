const autos = require('./cierreDeModulo1_1.js');
const auto = require('./cierreDeModulo1_1.js');
let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }   

const concesionaria = {
    /* completar */
   autos: autos,
   buscarAuto : function(patente){
    if(patente == this.autos[0].patente){
     return this.autos[0] ;

    } else if(patente == this.autos[1].patente){
        return this.autos[1] ;
   
    } else {
        return null
    }
// buscarCelular: function(codigo){
  //   for (let index = 0; index < this.celulares.length; index++) {
  //       if(celulares[index].codigo == codigo){
  //         return celulares[index];
  //       }  
  //       // else{
  //       //   // return null
  //       // } 
  //   }
  //   // return null           
  // },

  /* buscarCelular: function(codigo) {
    const celular = this.celulares.find((celu) => celu.codigo === codigo)
    // return (celular !== undefined) ? celular : null;
    return celular ? celular : null;
  },*/
   
},
    venderAuto  : function(patente){
    let auto = this.buscarAuto(patente);
    if(auto){
        return auto.vendido = true;
    }
    },
    autosParaLaVenta : function(){
        let auto = autos.filter((paraLaVenta)=> paraLaVenta.vendido !== true)
        return auto
    },
    autosNuevos : function(){
        //let autosParaLaVenta = this.autosParaLaVenta();
        let auto = autos.filter((km)=> km.km < 100 && km.vendido == false);
        return auto;
    
         /*     
  celularesNuevos2 : function(){
    let celularesNuevos = []
    const celulares = this.celularesParaLaVenta();
    for(i = 0; i < celulares.length; i++){
        if(celulares[i].horasDeUso < 100){
            celularesNuevos.push(celulares[i])
        }
    }
    return celularesNuevos;
  } */
    },
    listaDeVentas : function(){
        let autosVendidos = this.autos.filter(autosVendidos => autosVendidos.vendido == true)
        let precios = autosVendidos.map(autos => autos.precio);
        return precios;
    },
    totalDeVentas : function(){
        let autosVendidos = this.listaDeVentas();
        let totalVentas = autosVendidos.reduce (( acumulador,elemento) => {
            return acumulador + elemento,0;
        })
        return totalVentas;
    },
    /*
    totalDeVentas : function(){
        let autosVendidos = this.listaDeVentas();
        let totalVentas = autosVendidos.reduce (( acumulador,elemento) => acumulador + elemento,0)
        
        return totalVentas;
    }
    revisar 
}*/
puedeComprar :function(autos,persona){
    //let precio = this.autosParaLaVenta();
    let noEsCaro = autos.precio < persona.capacidadDePagoTotal; // true
    let puedePagar = (autos.precio / autos.cuotas ) < persona.capacidadDePagoEnCuotas
    return noEsCaro && puedePagar;
},
autosQuePuedeComprar : function(persona){
    let autosAlaVenta = this.autosParaLaVenta();
    let puedeComprar = autosAlaVenta.filter(auto => this.puedeComprar(auto,persona)==true);
    return puedeComprar
    }
}

console.log(concesionaria.puedeComprar(autos[0].precio,persona));
console.log(concesionaria.puedeComprar(autos[1].precio,persona));
console.log(concesionaria.puedeComprar(autos[2].precio,persona));
console.log(concesionaria.autosQuePuedeComprar());