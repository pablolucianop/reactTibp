import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {


  return (
    <div className="App">
        <Menu />
    </div>
  );
}

function Menu(props) {



  const [Pedidos, cambiarPedidos] = useState([])

  function agregarEnsalada(){

    cambiarPedidos( 
     [ ...Pedidos, 'ensalada' ]
    )
  }
  function agregarPapas() {
    cambiarPedidos([2, 2, 2, 2,])
  }
  return(
    <div>
       Menu 
      <Botonera masPapas={agregarPapas} masEnsaladas={agregarEnsalada}/>
      <MuestraPedido pedidos={Pedidos} />
     
      {/* < button onClick ={cambiar} > Agregar Papas</button> 
      <p>Nro de papas{Papas}</p> */}
   </div>
  )
}

function Botonera(props) {

  return (
    <div>
      < button onClick = {props.masPapas}  > Agregar Papas</button>
      < button onClick={props.masEnsaladas}  > Agregar ensalada</button>
    </div>
    
  )
}

function MuestraPedido(props) {

  return (

    <div>
      <p>Nro de papas {props.pedidos}</p>
    </div>
  )
}

export default App;
