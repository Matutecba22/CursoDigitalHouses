let persona = { // 
    nombre : 'Matias', /// propiedad : valor
    edad : 38,
    lugar : 'Cordoba'

}

console.log(persona.nombre);

// objetos literales metodos

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho","Javier"],
    horario : " de 19 a 21 hs",
    notificacion : function(){
        return "El horario de la cursada es " + this.horario

    }
}
 function Curso(cantidadDeAlumnos,docentes,horario){

    this.cantidadDeAlumnos = cantidadDeAlumnos,
    this.docentes = docentes,
    this.horario = horario
 }

let cursoDeProgramacion = new Curso(50,["Fernando", "Matias"], "De 19 a 21 hs");
let cursoDeMarketing = new Curso(45,["Matias", "Mauricio"], "De 17 a 20 hs");
//console.log(cursoDeProgramacion);
//console.log(cursoDeMarketing);
console.log(curso);

