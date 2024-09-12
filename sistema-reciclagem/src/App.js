import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Certifique-se de que Dashboard.js está na pasta src/pages
import CadastroPontos from './pages/CadastroPontos'; // Certifique-se de que CadastroPontos.js está na pasta src/pages
import MapaColeta from './pages/MapaColeta'; // Certifique-se de que MapaColeta.js está na pasta src/pages

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/cadastro-pontos">Cadastro de Pontos</Link></li>
            <li><Link to="/mapa-coleta">Mapa de Coleta</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cadastro-pontos" element={<CadastroPontos />} />
          <Route path="/mapa-coleta" element={<MapaColeta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
