function puedeJubilarse(edad,genero,aniosDeAporte){

    return (genero=='F' && edad >= 60  && aniosDeAporte >=30 ) ||(genero=='M' && edad >= 65  && aniosDeAporte >=30 )
 
 }
console.log(puedeJubilarse(65,'M',34)) 