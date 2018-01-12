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

Si en este momento tratan de agregar un nuevo elemento no va a suceder nada porque lo que hasta ahora hemos hecho solo es crear un simple HTML. Para lograr agregar elementos a la lista necesitamos tener un array (lista) para guardar nuestros elementos. Por eso agregaremos lo siguiente:

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Lavar los trastes'
      ]
    };
  }
  //El render va aqui
}
```

```javascript
<h3>Mi lista de pendientes</h3>
<ul>
  {this.state.items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```

Si agregamos una tarea extra al array, aparecera una nueva tarea en el UI.

```javascript
this.state = {
  items: [
    'Lavar los trastes',
    'Actualizar la versión de Node.js',
    'Dar mantenimiento a la DB'
  ]
};
```

Ahora lo que falta es agregar lo que escribamos en el input a la lista de pendientes, para eso primero es necesario poder guardar lo que vamos escribiendo en el input y despues agregar eso al Array. Les recuerdo que en el State vamos a guardar la información de nuestra vista.

```javascript
this.state = {
  text: 'Hola mundo',
  items: [
    'Lavar los trastes',
    'Actualizar la versión de Node.js',
    'Dar mantenimiento a la DB'
  ]
};
```

```javascript
<input value={this.state.text}/>
```

Como pueden ver ahora el input tiene el texto que definimos en el State. Pero hace falta poder modificar esa información, para eso escribiremos una función que reciba un evento cada vez que cambia el valor del input y con el valor que reciba modificar el state.

```javascript
class App extends Component {
  //Constructor
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
  //Render
}

<input onChange={this.handleChange} value={this.state.text}/>
```

Ahora cuando demos click en el botom el formulario ahara un submit por lo que crearemos una funcion que impida que se refresque la pagina, tome el valor del input del state, lo agregue al Array de pendientes, y limpie el valor del state:

```javascript
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

<form onSubmit={this.handleSubmit}>
```

Si tratamos de escribir algo nuevo o apretar el boton vamos a tener un error porque dentro de las funciones (metodos que hemos definido mas arriba) dichos metodos no asocian la palabra this al componente sino a la funcion en si misma, para corregirlo agregaremos al constructor lo siguiente:

```javascript
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
```

Por fin tenemos una versión funcionando de nuestra lista, el código se ve así:

```javascript
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
```