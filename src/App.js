import React, { useState } from 'react';
import './App.css';
import Materia from './Materia';
import Profesor from './Profesor';
import Horario from './Horario';

function App() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'materia':
        return (
          <>
            <button className="back-button" onClick={() => setView('home')}>Volver a la vista principal</button>
            <Materia />
          </>
        );
      case 'profesor':
        return (
          <>
            <button className="back-button" onClick={() => setView('home')}>Volver a la vista principal</button>
            <Profesor />
          </>
        );
      case 'horario':
        return (
          <>
            <button className="back-button" onClick={() => setView('home')}>Volver a la vista principal</button>
            <Horario />
          </>
        );
      default:
        return (
          <div className="App-content">
            <header>
              <h1>Sistema de horario</h1>
            </header>
            <nav>
              <ul>
                <li>
                  <button onClick={() => setView('materia')}>Materia</button>
                </li>
                <li>
                  <button onClick={() => setView('profesor')}>Profesor</button>
                </li>
                <li>
                  <button onClick={() => setView('horario')}>Horario</button>
                </li>
              </ul>
            </nav>
          </div>
        );
    }
  };

  return <div className="App">{renderView()}</div>;
}

export default App;
