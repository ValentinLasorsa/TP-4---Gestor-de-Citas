import React from 'react';

const Cita = ({ cita, eliminarCita }) => {
    const handleEliminarCita = () => {
      eliminarCita(cita.id);
    };
  return (
    <li>
      <p>
        <span>Mascota: {cita.nombreMascota}</span>
        <span>Dueño: {cita.nombreDuenio}</span>
        <span>Fecha: {cita.fecha}</span>
        <span>Hora: {cita.hora}</span>
        <span>Sintomas: {cita.sintomas}</span>
      </p>
      <button onClick={handleEliminarCita}>Eliminar</button>
    </li>
  );
};

export default Cita;
