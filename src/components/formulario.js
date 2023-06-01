import React, {useState} from 'react';
export default function Formulario({form})
const [mascota, setMascota] = useState("");
const [propietario, setPropietario] = useState("");
const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [sintomas, setSintomas] = useState("");

let datos={
    nameMascota: input.value,
    namePropietario: input.value,
    fechaFecha: Date(),
    horaHora: Time(),
    sintomas: input.value
};
return(
    <form onSubmit={agregarCita()}>
    <label>Nombre Mascota</label>
        <input onChange={this.handleChange} type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
        <label>Nombre Dueño</label>
        <input onChange={this.handleChange} type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
        <label>Fecha</label>
        <input onChange={this.handleChange} type="date" name="fecha" class="u-full-width" value=""></input>
        <label>hora</label>
        <input onChange={this.handleChange} type="time" name="hora" class="u-full-width" value=""></input>
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </form>
      )
