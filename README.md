# Parte 2 - GraphQL

Partiendo de la parte anterior del tutorial vamos a guardar nuestros datos en distintas bases de datos y vamos a usar Graphql para estructurar nuestras apis y llenar nuestro sistema:
Lo primero que tendremos que hacer es introducir lo siguiente en la terminal:

```
npm install express express-graphql graphql --save
```

Lo cuál instalara express que es un framework para crear servidores HTTP sobre la funcionalidad nativa de Node.js, express-graphql que es un conector extre express y graphql, y graphql en si mismo.

Después crearemos una carpeta donde desarrollaremos la funcionalidad de nuestro servidor:

```
mkdir server
```
