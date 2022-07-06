function  productoria(numero) {
    let producto = 1; /// se inicializa en 1 porque cualquier numero multiplicado por 0 da 0
    for (let i = 0; i < numero.length; i++) {
        if(numero[i] > 0){
            producto = producto * numero[i] ;
    }
    }
    return producto;
}

console.log(productoria([1, 2, 7]));
