import './App.css';
import ListadoCitas from "./components/ListadoCitas.js";
import Formulario from "./components/Formulario.js";
import React, { useState } from 'react';

function App (){
  const array = [
    {id:1,mascota:'Morena',duenio:'Brenda',date:'2017-12-31',time:'09:00',sintomas:'Control'}
  ]
  const [listaCitas, setListaCitas] = useState(array);

  const agregarCita = e => {
    e.preventDefault();
    setListaCitas(
      [
        ...listaCitas,
        {
          id :      e.target.id.value,
          mascota:   e.target.mascota.value,
          duenio:    e.target.duenio.value,
          date:     e.target.fecha.value,
          time:     e.target.hora.value,
          sintomas:  e.target.sintomas.value
        }
      ]
  );
  }
  function eliminarCita(idCita){
    const updatedLista = listaCitas.filter(cita => cita.id !== idCita);
    setListaCitas(updatedLista);
  };

  return (
    //HTML
    <div id='root'>
       <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h3>Agregar nueva cita</h3>
          <form onSubmit={(e) => agregarCita(e)}>
            <Formulario listaCitas={listaCitas} agregarCita={agregarCita}/>
          </form>            
          </div>
          <div className="one-half column">
          <h3> Administra las citas</h3>
            <div>
              <ListadoCitas listadoCitas={listaCitas} eliminar={eliminarCita}/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;