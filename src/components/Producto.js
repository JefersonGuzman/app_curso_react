import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) =>{

    const {nombre,precio,id} = producto;

    //Agregar producto al Carrito

    const seleccionProducto = id =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        // Los 3 puntos nos sirve para realizar una copia de un arreglo o de algo
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Eliminar un producto del carrito
    const eliminarProducto = id =>{ 
        const productos = carrito.filter(producto => producto.id !== id);

        //Colocar los productos en el state
        agregarProducto(productos)
    }
    //En este return creamos un boton el cual le asignamos el tipo, evento el cual tiene una funcion
    // que lo que hace es decirnos que producto se esta comprando 
    return( 
        <div className="bloqueProducto">
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos 
             ?( <button type="button" onClick={ () => seleccionProducto(id)}>
                  Comprar
                </button> )
             : <button type="button" onClick={ () => eliminarProducto(id)}>
             Eliminar
           </button>
            }
        </div>
    );
}

export default Producto;