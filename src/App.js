import React from 'react';
import './App.css'
class App extends React.Component {

  state = {
    num1: null,
    num2: null
  }

  somar = () => {
    const resultado = Number(this.state.num1) + Number(this.state.num2)
    this.setState({resultado})
  }
  
  render() {
    return (
      <div>
        <h1 className='titulo'>Somador de Números</h1>
        <label>Digite o primeiro número: </label>
        <input className='input1' type='text' value={this.state.num1}
               onChange={(e) => this.setState({num1: e.target.value})}/>
        <br/><br/>
        <label>Digite o segundo número: </label>
        <input className='input2' type='text' value={this.state.num2}
               onChange={(e) => this.setState({num2: e.target.value})}/>
        <br/><br/>
        <button onClick={this.somar}>SOMAR</button>
        <br/><br/>
        <h2>O resultado da soma é: {this.state.resultado}</h2>
      </div>
    )
  }
}

export default App;
