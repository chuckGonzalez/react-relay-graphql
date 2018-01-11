# Parte 1 - React

Para facilitar las cosas para este tutorial y a todos los que buscan aprender de React, vamos a utilizar [Create React App](https://github.com/facebookincubator/create-react-app).
De hecho este repositorio fue creado apartir de ese repo y apartir de ahí vamos a trabajar porque ya trae configurado todo para un proyecto nuevo con React.
En la configuración de incluye Webpack, procesadores como Babel y todas las dependencias que vamos a ocupar para esta primer parte.

Si están interesados en crear un nuevo proyecto solo tienen que escribir lo siguiente en terminal: 

`npx create-react-app fb-tutorial`

El comando creara una carpeta con el nombre de proyecto que hayan escogido. Y dentro creara una serie de scripts que podemos ejecutar para ver nuestra app. Por lo que haremos lo siguiente en la terminal.

`cd fb-tutorial && npm start`

Esto empaquetara nuestros archivos, creara un servidor para poder solicitarlos y abrira nuestro navegador en [http://localhost:3000](http://localhost:3000). Según la computadora puede tardar de pocos segundos a uno o dos minutos.
Para efectos prácticos los chicos de FB han creado para nosotros una pequeña página de bienvenida.

Para poder editarla debemos ir a fb-tutorial/src y modificar el archivo app.js, lo siguiente que vamos a hacer es modificar nuestro archivo con un pequeño ejemplo que esta en la página de inicio de React, que es un To Do List.

Vamos a reemplazar todo el contendo del archivo con lo siguiente y veremos como el browser se refresca solo cuando los cambios estan listos:

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Mi lista de pendientes</h3>
        <form>
          <input />
          <button>Agregar pendiente</button>
        </form>
      </div>
    );
  }
}

export default App;
```

Si prestan atención veremos que se agrego un Encabezado y un formulario con un input y un boton; Justo debajo del titular vamos a simular nuestra lista de pendientes.

```javascript
<h3>Mi lista de pendientes</h3>
<ul>
  <li>Lavar los trastes</li>
  <li>Actualizar versión de Node.js</li>
</ul>
```

Si en este momento tratan de agregar un nuevo elemento no va a suceder nada porque lo que hasta ahora hemos hecho solo es crear un simple HTML.


