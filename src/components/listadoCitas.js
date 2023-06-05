import React from 'react';
import Cita from './cita';

const ListadoCitas = ({ citas }) => {
  return (
    <div>
      <h2>Listado de citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        <ul>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListadoCitas;
