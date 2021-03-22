import React from 'react';
import './carrito.css'
import Producto from './Producto';

/*  En este modelo hacemos un ternario donde comparamos la cantidad
    del arreglo carrito para verificar si ya hay elementos añadidos
    si no hay elementos mostramos un mensaje de lo contrario se deberian
    visualizar los elementos que ya esten añadidos

*/

const Carrito = ({carrito, agregarProducto}) =>(
    <div className="carrito">
        <h2>Tu Carrito de compras</h2>

        
        {carrito.length === 0 
        ?
            <p className="mensaje">No hay elemento en el carrito</p>

        :carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />

        ))
        }
    </div>
)


export default Carrito;