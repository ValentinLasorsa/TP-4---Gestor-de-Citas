import React from 'react';
import Cita from './cita';

const ListadoCitas = ({ citas }) => {
  return (
    <div className='one-half column'>
      <h2>Administra tus citas</h2>
: (
        <ul>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </ul>
      )
    </div>
  );
};

export default ListadoCitas;
