import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hola mundo',
      items: [
        'Lavar los trastes',
        'Actualizar la versión de Node.js',
        'Dar mantenimiento a la DB'
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    
    /*////////////////
    //  e.target es el input en si mismo y
    //  la propiedad value es lo que hemos escrito
    //  el componente de react (this) tiene un metodo setState
    //  que recibe un objeto con los valores que van a
    //  cambiar en el state con el valor que definimos y ejecuta
    //  nuevamente el render
    */////////////////
    
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault(); //Evitamos que la página haga Postback
    if (!this.state.text) return; //Si no hay nada en el state interrumpir la funcion;
    
    /*///////////////
    //  El metodo this.setState tambien acepta como
    //  parametro una funcion desde la que podemos
    //  consultar el stado anterior
    *///////////////
    
    this.setState(prevState => ({
      items: prevState.items.concat(prevState.text),
      text: ''
    }) );
  }
  render() {
    return (
      <div>
        <h3>Mi lista de pendientes</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>Agregar pendiente</button>
        </form>
      </div>
    );
  }
}

export default App;
