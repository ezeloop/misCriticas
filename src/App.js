import React, {useState, useEffect, Fragment} from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Critica from './components/Critica';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import "./index.css";

const Container = styled.div`
 
  margin-top: 2rem;
  
  h1{
    font-size:5rem;
  }


 
`;




function App() {

  let criticasIniciales = JSON.parse(localStorage.getItem('criticas'));
  if(!criticasIniciales){
    criticasIniciales = [];
  }

  const [criticas,guardarCriticas] = useState(criticasIniciales);

  const [mostrarFormulario, guardarMostrarFormulario] = useState(false);

  const [mostrarCriticas, guardarMostrarCriticas] = useState(false);

  const [mostrarBotones, guardarMostrarBotones] = useState(true);





  //useEffect
  useEffect(() => {
    if(criticasIniciales){
      localStorage.setItem('criticas', JSON.stringify(criticas))
    } else {
      localStorage.setItem('criticas', JSON.stringify([]));
    }
    
  }, [criticas, criticasIniciales]);

 const crearCritica = critica => {
    guardarCriticas([  
      ...criticas,
      critica
    ])
    console.log(critica);

 }

 const eliminarCritica = id => {
  //creo nuevo arreglo que va a ser el que crea filter, sin esa cita q ya elimine
  //y al usar filter, tengo q buscar el distinto, para q filter cree uno nuevo con los dos que quedaron. Por que si no, lo hace al reves
  const nuevasCriticas =criticas.filter(critica=> critica.id !==id);

  guardarCriticas(nuevasCriticas);
}
  const pressAgregarCritica = () =>{
    guardarMostrarFormulario(true);

    guardarMostrarCriticas(false);

    guardarMostrarBotones(false)
  }

  const pressMostrarCriticas = () =>{
    guardarMostrarFormulario(false);
    guardarMostrarCriticas(true);
    
  }



  return (

    <Router>

    

    <div className="main-container">
     <Nav/>
    <h1>Mis Criticas</h1>
    
   
    
    {mostrarBotones ? <div className="botones">
    <button className="btn" onClick={pressAgregarCritica} >Agregar Critica</button>
    <button className="btn">Buscar Critica</button>
    <button className="btn" onClick={pressMostrarCriticas}>Mostrar Criticas</button>
    </div> 
    :null}

   


    <Container>

        {mostrarFormulario ? 

          <Formulario 
          crearCritica={crearCritica}
          guardarMostrarFormulario={guardarMostrarFormulario}
          
          
          
        />
        
        : null}
      <div className="contenedor-criticas">
        {mostrarCriticas ? 
          
          criticas.map(critica =>( 
          <Critica
          key={critica.id}
          critica={critica}
          eliminarCritica={eliminarCritica}
          
        />)
        )

        
        
        : null} 
</div>
   
        
      
    </Container>
    
    </div>

    </Router>
    
  );
}

export default App;
