import React, { useEffect, useState } from 'react';
import Formulario from './Components/Formulario';
import PintarPersonajes from './Components/PintarPersonajes';

import Rick from './asset/Image/Rick-And-Morty-Free-PNG.png';
import Rick2 from './asset/Image/Rick-And-Morty-PNG-Free-File-Download.png'
import './App.css'
import Navegacion from './Components/Navegacion';

const App = () => {

  const [nombre, setNombre] = useState("");

  // cada vez que se renderiza se activa el useEffect

  useEffect(() => {

  })

  // funcion de reinicio

  const reinicio = () => {
    return (
      setNombre("")
    );
  };

  return (
    <>
    <Navegacion/>
    <div className="contenedor-app">
      <div className="app-imagen">
        <img src={Rick} alt="rick"/>
      </div>
      <div className='app-imagen2 bounceInDown'>
        <img src={Rick2} alt="rick"/>
      </div>
      <div className="container contenedor-info center-align">
        <div className="contenedor-titulo hoverable">
        <h1 className='titulo-morty'>RICK & MORTY</h1>
        <Formulario setNombre={setNombre} reinicio={reinicio}/>
        </div>
        
        <PintarPersonajes nombre={nombre}/>
       </div>
    </div>
    </>
  )
}

export default App;