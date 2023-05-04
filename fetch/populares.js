
window.onload = function() {

    fetch("https://api.giphy.com/v1/gifs/trending?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&limit=25&rating-G")
    .then(function(respuesta){

        return respuesta.json()
    })
    .then(function(informacion){
            console.log(informacion.data);

            for(let i = 0 ; i <informacion.data.length; i++){
           
                let gif = "<p>" + informacion.data[i].title  + "<p>";
                gif += "<img src=" + informacion.data[i].images.original.url +  ">"     
                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
           
            }
    })
    .catch(function(e){
        alert("error algo anda mal")
    })
}