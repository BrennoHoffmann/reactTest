import React from 'react';
import Botao from '../Botao/Botao';

import './Contador.css';
class Contador extends React.Component {

    state = {
        contador: 0
    }

    aumentar = () => {
       let novoContador = this.state.contador;
       novoContador++;
       this.setState({contador: novoContador});
    }

    diminuir = () => {
        let novoContador = this.state.contador;
        novoContador--;
        this.setState({contador: novoContador});
    }

    reset = () => {
        this.setState({contador:0})
      
    }
   

    render(){
        return (
        <div>
            <h1>O valor do contador é: {this.state.contador} </h1>
          <Botao
                classe="botao"
                aoClicar={this.aumentar}
                titulo="Aumentar"
          />
          <Botao
                classe="botao2"
                aoClicar={this.diminuir}
                titulo="Diminuir"
          />
          <Botao
                classe="botao3"
                aoClicar={this.reset}
                titulo="Reset"
          />
        </div>
        );
    }
}

export default Contador;