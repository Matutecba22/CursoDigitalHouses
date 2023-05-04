import React, {Component} from 'react';
// import './Peliculas.css'

class Contador extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero:props.inicial
        }
    }

    incrementar(){
        this.setState({numero:this.state.numero + 1})
    }
    decrementar(){
        this.setState({numero:this.state.numero - 1})
    }

    componentDidMount(){
        console.log('Me Monte!!!');
    }


    componentDidUpdate(){
        console.log('Me Actualice!!!!');
    }

    render() {
        console.log('Estoy renderizando');
        return(
            <div>

                <p>
                    Soy el Numero {this.state.numero}
                    <button onClick={() => this.incrementar()}>incrementar</button>
                    <button onClick={() => this.decrementar()}>Decrementar</button>
                </p>

            </div>
        )
    }
}
export default Contador;
