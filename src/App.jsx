import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Aulas from './Components/Aulas/Aulas';
import Professores from './Components/Professores/Professores';
import HorarioLocalizacao from './Components/HorarioLocalizacao/HorarioLocalizacao';
import './App.css';  // Certifique-se de que o CSS global está sendo importado

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/professores" element={<Professores />} />
            <Route path="/horario-localizacao" element={<HorarioLocalizacao />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
