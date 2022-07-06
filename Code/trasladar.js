let unArray = [1,2,3];
let otroArray= [4,5];

function trasladar(unArray, otroArray){

    let nuevoArray = unArray.pop();
   
    return otroArray.push(nuevoArray)

}

console.log(unArray);
console.log(otroArray);
console.log(trasladar(unArray,otroArray));