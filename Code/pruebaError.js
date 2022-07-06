function procesar(array){
    let nuevoArray = []
    for(let i = 0; i < array.length; i++){
        nuevoArray.push(array[i]);
    }
    return nuevoArray;
}
console.log(procesar(["www.google.com","www.yahoo.com"]));