function medallaSegunPuesto(numero)
{
 if (numero==1){

     return 'Oro';

 } else if(numero==2){

    return 'Plata';
 } else if (numero==3){
     return 'Bronce';
 }else{

    return 'Seguí participando';
    
 }

}
console.log(medallaSegunPuesto(3));