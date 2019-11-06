import React from 'react';
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
      <Hola modo={'keke'} lista={[1,2,3]} estilo={'oscuro'}/>

      <Holi modo={'sarasasa'} lista={['a','b','c']} estilo={'negro'}/>
      </header>
    </div>
  );
}

function Hola(props) {
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
    {
      props.lista.map(nro => {
       return (<p>{nro}</p>)
    })
    }
    </div>
  )
}

function Holi(props) {
  return(
    <div>
    Holi wachin 
    {
      props.modo === 'sarasa' ? (
        <p>hola sarasa</p>
      ) : (
          <p>hola no sarasa</p>
        )
    }
    {
      props.lista.map(letra => {
       return (<p>{letra}</p>)
    })
    }
    </div>
  )
}

export default App;
