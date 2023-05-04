import React, { Component } from 'react';
import Pelicula from './Peliculas';
import Saludo from './saludo';


class TiraPeliculas extends Component {

    
        lanzarAlerta () {
                alert('Me Clickeaste!')
        }
    
        cambiarAmarillo () {
            document.querySelector('body').style.backgroundColor="yellow"
            
        }
        cambiarRosa () {
            document.querySelector('body').style.backgroundColor="pink"
            
        }

    

    render() { return (
        <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut = {this.cambiarRosa}>
            <Pelicula generos ={["Fantasia","Aventura"]} rating ='8.8' titulo='Harry Potter' />
            <Pelicula generos ={["Fantasia","Animacion"]} rating ='7.5' titulo='Toy Story'/>
            <Pelicula generos ={["Drama"]}  rating ='6.0' titulo='Her'/>
            <Pelicula generos ={["Drama"]} rating ='8.8' titulo='Parasite'/>
            <Pelicula generos ={["Accion","Aventura"]} rating ='3' titulo='Transformers'/>
            <Saludo titulo = "Hola mundo" subtitulo =  '¡Nunca paremos de aprender!'/>
        </div>
    );
}
}
// function TiraPeliculas() {
//     return (
//         <div>
//             <Pelicula generos ={["Fantasia","Aventura"]} rating ='8.8' titulo='Harry Potter' />
//             <Pelicula generos ={["Fantasia","Animacion"]} rating ='7.5' titulo='Toy Story'/>
//             <Pelicula generos ={["Drama"]}  rating ='6.0' titulo='Her'/>
//             <Pelicula generos ={["Drama"]} rating ='8.8' titulo='Parasite'/>
//             <Pelicula generos ={["Accion","Aventura"]} rating ='3' titulo='Transformers'/>
//             <Saludo titulo = "Hola mundo" subtitulo =  '¡Nunca paremos de aprender!'/>
//         </div>
//     );
// }
export default TiraPeliculas;
