import React from "react";
import '../estilos/Perfil.css';


function Perfil (props){
    return(
        <div className='contenedor-perfil'>
            <img
            className='imagen-perfil'
            src={require(`../imagenes/${props.imagen}.png`)}
            alt='Foto de Brais' />
            <div className="contenedor-texto-perfil">
                {props.nombre } en {props.pais}
                <p className="cargo-perfil">
                {props.cargo } en {props.empresa}
            </p>
            <p className="resena-perfil">
                {props.resena}
            </p>
            </div>
        </div>
    )
};


export default Perfil;
