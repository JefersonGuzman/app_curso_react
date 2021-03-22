//Los componentes se deben Crear con la Primera letra en Mayuscula
//Sin espacios

import React from 'react';

function Header({titulos}) {

    // Por fuera del return puedo colocar variables y para poderlo mostrar
    // se debe cerrar en { }

    // function Header (props){

    //}

    //    return (
    //     <h1 className="encabezado">{props.titulos}</h1>
    // )

    // Props  :  puedes enviar cadenas a el componente padre
    // console.log(props);

    return (
        <h1 className="encabezado">{titulos}</h1>
    )
}

export default Header;