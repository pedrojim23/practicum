import React, { useState } from 'react';

function Materia() {
  const [nombreMateria, setNombreMateria] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [prerrequisitos, setPrerrequisitos] = useState('');
  const [modulosSemanales, setModulosSemanales] = useState('');
  const [candidatos, setCandidatos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre de la materia:', nombreMateria);
    console.log('Prioridad:', prioridad);
    console.log('Prerrequisitos:', prerrequisitos);
    console.log('Módulos semanales:', modulosSemanales);
    console.log('Candidatos:', candidatos);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombreMateria':
        setNombreMateria(value);
        break;
      case 'prioridad':
        setPrioridad(value);
        break;
      case 'prerrequisitos':
        setPrerrequisitos(value);
        break;
      case 'modulosSemanales':
        setModulosSemanales(value);
        break;
      case 'candidatos':
        setCandidatos(value.split(','));
        break;
      default:
        break;
    }
  };

  return (
    <div className="Materia">
      <div className="Materia-content">
        <header>
          <h1>Sistema de Horario - Materia</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de la materia:
            <input
              type="text"
              name="nombreMateria"
              value={nombreMateria}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Prioridad:
            <input
              type="text"
              name="prioridad"
              value={prioridad}
              onChange={handleChange}
            />
          </label>
          <label>
            Prerrequisitos:
            <input
              type="text"
              name="prerrequisitos"
              value={prerrequisitos}
              onChange={handleChange}
            />
          </label>
          <label>
            Modulos:
            <input
              type="text"
              name="modulosSemanales"
              value={modulosSemanales}
              onChange={handleChange}
            />
          </label>
          <label>
            Candidatos:
            <input
              type="text"
              name="candidatos"
              value={candidatos}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Materia;
