import React from 'react'

export default function Citas({cita,eliminar} ) {
// Cita
        return (
          <div className="cita">
        
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.duenio}</span></p>
            <p>Fecha: <span>{cita.date}</span></p>
            <p>Hora: <span>{cita.time}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button-eliminar u-full-width" onClick={() => eliminar(cita.id)}>Eliminar ×</button>
        </div>
    )
}