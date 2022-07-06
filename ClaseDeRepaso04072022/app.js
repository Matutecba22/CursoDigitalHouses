const celulares = require('./celulares')

const dbz = {
  celulares: celulares,
  buscarCelular: function(codigo){
        for(let i = 0; i< celulares.length; i ++){
            if (celulares[i].codigo == codigo){
                return celulares[i];
            }return null
        }
  },
  venderAuto:'',
  celularesParaLaVenta: '',
  celularesNuevos: '',
  listaDeVentas: '',
  totalDeVentas:'',
  puedeComprar:'',
  celularesQuePuedeComprar:'',
};