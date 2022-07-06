function sumatoriaBajoImporte(importes) {
    let suma = 0; /// suma acumulador
    for (i = 0; i < importes.length; i++) { // recorre arreglo

     if (importes[i] <= 1000 && importes[i] > 0){ // importe [i] recorro el indice i 

         suma = suma + importes[i]; /// suma = 0 ; 300 , (300 + 400 = 700) ; //
     }
    }
    return suma; // retorno del acumulador
}
sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]);