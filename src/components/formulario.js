import React, { useState } from 'react';

export default function Formulario (){
  const CrearCita = (e) => {
    e.preventDefault();

    const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDuenio, setNombreDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');


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
    <div className='one-half column'>
      <h2>Crear mi Cita</h2>
    <form onSubmit={CrearCita}>    
      <label htmlFor="nombreMascota">Mascota:</label>
      <input type="text" id="nombreMascota" className='u-full-width' value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />

      <label htmlFor="nombreDuenio">Dueño:</label>
      <input type="text" id="nombreDuenio" className='u-full-width' value={cita.nombreDuenio} onChange={(e) => setNombreDuenio(e.target.value)} />

      <label htmlFor="fecha">Fecha:</label>
      <input type="date" id="fecha" className='u-full-width' value={fecha} onChange={(e) => setFecha(e.target.value)} />

      <label htmlFor="hora">Hora:</label>
      <input type="time" id="hora" className='u-full-width' value={hora} onChange={(e) => setHora(e.target.value)} />

      <label htmlFor="sintomas">Sintomas:</label>
      <textarea id="sintomas" className='u-full-width' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
      

      <button type="submit">Agregar cita</button>
    </form>
    </div>
  );
};
