import React from 'react';


function Pelicula(props) {

    // let rating = 5
    let generos = ["Accion","Drama"]
    return (
        <div>

            <h2>{props.titulo}</h2>
            {/* <h2>Titulo de la pelicula !!!!</h2> */}
            <p>Rating: {props.rating}</p>
<ul>
        {props.generos.map((genero,i) => <li key = {genero + i}>{genero}</li>)}

</ul>

        </div>
    );
}
export default Pelicula;
