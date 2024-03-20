import React, { useState } from 'react';

function Profesor() {
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [opciones, setOpcines] = useState([]);
  const [disponibilidad, setDisponibilidad] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre del docente:', nombreProfesor);
    console.log('Opciones:', opciones);
    console.log('Disponibilidad:', disponibilidad);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombreProfesor':
        setNombreProfesor(value);
        break;
      case 'opciones':
        setOpcines(value);
        break;
      case 'disponibilidad':
        setDisponibilidad(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Profesor">
      <div className="Profesor-content">
        <header>
          <h1>Sistema de Horario - Profesor</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del docente:
            <input
              type="text"
              name="nombreProfesor"
              value={nombreProfesor}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Opciones:
            <input
              type="text"
              name="opciones"
              value={opciones}
              onChange={handleChange}
            />
          </label>
          <label>
            Disponibilidad:
            <input
              type="text"
              name="disponibilidad"
              value={disponibilidad}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Profesor;
