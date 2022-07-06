let fecha = new Date();

console.log(fecha);
console.log(fecha.getDay()); // dia en curso inicializa los domingos con indice 0
console.log(fecha.getDate()); // retorna el dia del mes en curso
console.log(fecha.getMonth());  // retorna el mes en curso inicializa en el indice 0 enero
console.log(fecha.getFullYear());// retorna el año en curso 
console.log(fecha.toUTCString());

//
let fechaActual = new Date(1975,07,12);

let anio = fechaActual.getFullYear();
let mes  = fechaActual.getMonth();
let dia = fechaActual.getDate();
let diasDeLaSemana = fechaActual.getDay();

let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log("Hoy es dia " + dias[diasDeLaSemana] + " " + dia + " de " + meses[mes] + " del año " + anio);