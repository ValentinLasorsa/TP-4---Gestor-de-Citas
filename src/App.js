import './App.css';
import React from 'react';
import Formulario from './components/formulario';
import ListadoCitas from './components/listadoCitas';

const App = () => {
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState('');

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      <h1>Gestor de Citas</h1>
      <Formulario agregarCita={agregarCita} />
      {error && <Error mensaje={error} />}
      <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
};

export default App;