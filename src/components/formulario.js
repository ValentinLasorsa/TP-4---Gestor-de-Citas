import React from 'react';
function Formulario(props){
    return(
        <div className="datos"></div>
    )
}
function datos(props){
    return (
        <div className="datos">
          <div className="datos-mascota">
            {props.datos.mascota}
          </div>
          <div className="datos-propietario">
            {props.datos.propietario}
          </div>
          <div className="datos-fecha">
        {formatDate(props.fecha)}
      </div>
      <div className="datos-hora">
        {formatTime(props.hora)}
      </div>
      <div className="datos-sintomas">
        {props.datos.sintomas}
      </div>
        </div>
      );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
export default Formulario