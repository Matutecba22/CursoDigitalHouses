function dividir(numeroA,numeroB){
    if(numeroA ===0  || numeroB === 0){
        return "No se puede dividir por cero";
    }
    return numeroA / numeroB;

};
module.exports=dividir;//() exportar el resultado sin ()exporta la funcion

console.log(dividir(1,2));
