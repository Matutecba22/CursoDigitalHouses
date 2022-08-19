let series = [{ "id": 1, "name": "Friends" },
{ "id": 2, "name": "Breaking Bad" },
{ "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" }]

function peliculasid (numero){
let pelisid = series.find ((pelis) => pelis.id ==numero)
return pelisid
}
console.log(peliculasid(1));
