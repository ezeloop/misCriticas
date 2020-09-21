import React from 'react';
import styled from '@emotion/styled';

const Critica = ({critica, eliminarCritica}) => { 

    const CriticaStyled = styled.div`
    font-size:4rem;
    font-family: 'Staatliches', cursive;
    background-color: #ccc;
    text-align: center;
    width:600px;
    height:100%;
    border-radius:40px;
    padding: 3rem 0 3rem 0
        `;


    return ( 
        <CriticaStyled>
            <p>Título: <span>{critica.titulo}</span></p> 
            <p>Año: <span>{critica.añoTitulo}</span></p>
            <p>Comentario: <span>{critica.texto}</span></p>
            <p>Fecha en verla: <span>{critica.mesAñoVisto}</span></p>
            <p>Con quien la vi: <span>{critica.compañia}</span></p>
            <p>Calificacion: <span>{critica.calificacion}</span></p>

            <button
            className = "button eliminar"
            onClick={()=> eliminarCritica(critica.id)}
           
            //en vez de a onclick la funcion asi nomas, debo pasarla como arrow function para que espere a que eso ocurra
            >Eliminar &times;</button>
            
            
        </CriticaStyled>
     );
}
 
export default Critica;