let medallas = ["Oro","Plata","Bronce","Seguí participando"]

function medallaSegunPuesto (puestos){
    
    if (puestos <=3){
        
        return medallas[puestos-1]

    }else {

        return "segui Participando"
        
    }
}
console.log(medallaSegunPuesto(2));