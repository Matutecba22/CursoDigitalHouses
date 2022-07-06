function naipes (carta){
    let contador = []
    for (let numero=0; numero<12; numero++){
        if (numero!=8 && numero!=9){
            contador.push(numero+  " de " +carta)
        }
    }
    return contador
}