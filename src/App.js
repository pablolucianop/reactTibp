import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es la página de TIBP <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Hola modo={'keke'} estilo='oscuro'/>
      </header>
    </div>
  );
}

function Hola(props) {
  const [Veces, cambiarVeces] = useState(0)
  const cambiar = () => {
    cambiarVeces(Veces + 1)
  }
  const reiniciar = () => {
    cambiarVeces(0)
  }
  return(
    <div>
      Hola amigou
      {
        props.modo === 'teens' ? (
          <p>hola chicos</p>
        ) : (
            <p>buenos dias senior</p>
          )
      }
      <p>veces apretado {Veces}</p>
      <button onClick={cambiar}>Cambiar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

function Parte(props) {
  return (
    <h1>{props.veces}</h1>
  )
}

export default App;

