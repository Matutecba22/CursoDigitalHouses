window.addEventListener("load",function(){

if(localStorage.getItem("nombreUsuario"== null)){
    
    let nombre = prompt("Dinos tu nombre")
document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;
//localStorage.clear()// borrar
localStorage.setItem("nombreUsuario",nombre)

}else {
    let nombre = prompt("Dinos tu nombre")
document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;


}
console.log(localStorage);
});