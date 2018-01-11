import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Mi lista de pendientes</h3>
        <ul>
          <li>Lavar los trastes</li>
          <li>Actualizar versión de Node.js</li>
        </ul>
        <form>
          <input />
          <button>Agregar pendiente</button>
        </form>
      </div>
    );
  }
}

export default App;
