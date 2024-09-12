import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema de coleta seletiva! Use os botões abaixo para navegar pelas funcionalidades do sistema.</p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/cadastro-pontos">
          <button>Cadastrar Pontos de Coleta</button>
        </Link>
        <Link to="/mapa-coleta">
          <button>Ver Mapa de Coleta</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
