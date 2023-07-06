import React from 'react'
import Cita from './Cita'

export default function listadoCitas({listarCitas, eliminar}) {
  return (
    <>
        {listarCitas.map((item)=>(
            <div key={item.id} className="col-3  margin-top">
                <Cita cita={item} eliminar={eliminar}/>
            </div>          
          ))}
    </>
  )
}