import React, { useState } from 'react';

const Formulario = ({ agregarCita }) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDuenio, setNombreDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (nombreMascota.trim() === '' || 
    nombreDuenio.trim() === '' || 
    fecha.trim() === '' || 
    hora.trim() === '' || 
    sintomas.trim() === ''
    ) {
      return;
    }


    const nuevaCita = {
      nombreMascota,
      nombreDuenio,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);
    setNombreMascota('');
    setNombreDuenio('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombreMascota">Mascota:</label>
      <input type="text" id="nombreMascota" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />

      <label htmlFor="nombreDuenio">Dueño:</label>
      <input type="text" id="nombreDuenio" value={nombreDuenio} onChange={(e) => setNombreDuenio(e.target.value)} />

      <label htmlFor="fecha">Fecha:</label>
      <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />

      <label htmlFor="hora">Hora:</label>
      <input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />

      <label htmlFor="sintomas">Sintomas:</label>
      <textarea id="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
      

      <button type="submit">Agregar cita</button>
    </form>
  );
};

export default Formulario;
