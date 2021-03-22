import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Producto from './components/Producto';
import Footer from './components/Footer';
import Carrito from './components/Carrito';


function App() {


    // Crear Listado de productos
    //useState (es todo lo que se modificara cuando el usuario interatua para poder ver lo que
    // hace el usuario en la pagina)

    //El state no se puede modificar directamente por eso es que se crean 2 funciones
    // la cual la segunda nos sirve para modificarlo
    const [ productos, guardarProductos] = useState([
      { id: 1, nombre:'Camisa React', precio: 50 },
      { id: 2, nombre:'pantalon', precio: 40 },
      { id: 3, nombre:'Gorra', precio: 30 },
      { id: 4, nombre:'Camisa HTML', precio: 10 },

    ]);


    // State para un carrito de compras
    // Lo primero es la Regerencia y el siguiente  parametro es el que 
    // lo modificara
    const [carrito, agregarProducto] = useState([]);
  
    //Obtener la fecha.
    const fecha = new Date().getFullYear();


  return (

    // Para poder mostrar mas de 1 cosas en la pagina se debe contener
    // en un div o en su defecto hacer uso de los Fragment pero antes 
    // deben importar

    <Fragment>
        <Header
          titulos='Tienda Virtual'
        />
          
          <h1>Lista de productos</h1>
          {productos.map(producto => (
            <Producto
            // Recordar que siempre debes pasarle algo que sea unico un campo a cada modelo
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
  
          ))}
        
        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
        <Footer
          fecha={fecha}
        />
    </Fragment>

    
  );
}

export default App;
