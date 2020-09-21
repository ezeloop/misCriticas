import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error'

const { v4: uuidv4 } = require('uuid');



const Formulario_css = styled.form`
text-align:center;
background-color:white;
border-radius:3px;
font-size:16px;
color: #999;
padding:10px;
margin: 0 auto;
width:600px;

input, textarea {
    border:0;
    outline:none;
    
}

.boton-formulario{
    text-align:center;
}

.formulario-element{
    border: solid 1px #ccc;
    width:540px;
    padding: 10px;
    &:focus{
        border-color: #0099F7;
    }
}

`
    
    


const Formulario = ({crearCritica, guardarMostrarFormulario}) => {
    const [datos, guardarFormulario] = useState({
        titulo: '',
        texto: '',
        compañia:'',
        añoTitulo:'',
        mesAñoVisto:'',
        calificacion:''

    })

    const [error, actualizarError] = useState(false);

    //funcion que  se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e => {
        guardarFormulario({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //extraer valores
    const {titulo, texto, compañia, añoTitulo,mesAñoVisto, calificacion} = datos;


    //trabajo el form
    //cuando el usuario presiona agregar critica
    const submitCritica = e => {
        //para evitar que haga la accion de posteo
        e.preventDefault(); 

        //validar
        if(titulo.trim() === '' || texto.trim() === '' || compañia === '' || calificacion === ''|| añoTitulo === ''|| mesAñoVisto === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        

        //asignar id
        datos.id = uuidv4();

        
        //crear la critica

        crearCritica(datos);

       // reiniciar el form
        guardarFormulario({
            titulo: '',
            texto: '',
            resumen:'',
            calificacion:'',
            compañia:'',
            añoTitulo:'',
            mesAñoVisto:'',
        })
        //se reinicia porq le pase al componente value lo que tiene, y al estar vacio, el value es ese
    }


    return (
      <div>
        <h1>Tu critica</h1>
    
        <Formulario_css action="/"method="post"
         onSubmit={submitCritica}
         
         >

          { error ? <Error mensaje="Llene todos los campos" /> : null}
          
             <label> Titulo a criticar</label>
             <input
                 type="text"
                 name="titulo"
                 className="formulario-element"
                 placeholder="Titulo a criticar"
                 onChange={handleChange}
                 value={titulo}
             /> 
            

            
            <label> Año</label>
             <input
                 type="value"
                 name="añoTitulo"
                 className="formulario-element"
                 placeholder="Año"
                 onChange={handleChange}
                 value={añoTitulo}
                 
             /> 
             

            
            <label> Comentario</label>
             <textarea
                 type="text"
                 name="texto"
                 className="formulario-element"
                 placeholder="Dí lo que realmente sientes al respecto"
                 onChange={handleChange}
                 value={texto}
             /> 
            

            
            <label> Fecha en que la ví</label>
             <input
                 type="date"
                 name="mesAñoVisto"
                 className="formulario-element"
                 onChange={handleChange}
                 value={mesAñoVisto}
                 
             /> 
            
            
            
             <label> Con quien la vi</label>
             <input
                 type="text"
                 name="compañia"
                 className="formulario-element"
                 placeholder="Con compañia o solo"
                 onChange={handleChange}
                 value={compañia}
             /> 
            

            
            <label> Calificación</label>
             <select
                 name="calificacion"
                 className="formulario-element"
                 onChange={handleChange}
                 value={calificacion}


                 >
                <option value="">- -Califica- -</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
                 
             
               
            <div className="boton-formulario">
             <button
                type="submit"
                className="button-primary" 
             >Agregar Crítica</button>

            </div>
             
             
         </Formulario_css>
       
       </div>
     );
}
 
export default Formulario;