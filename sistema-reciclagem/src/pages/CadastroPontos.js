import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CadastroPontos() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para cadastrar o ponto de coleta
    console.log('Ponto de coleta cadastrado:', { nome, endereco, tipoMaterial });
  };

  return (
    <div>
      <h1>Cadastro de Pontos de Coleta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do ponto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo de material aceito"
          value={tipoMaterial}
          onChange={(e) => setTipoMaterial(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">
          <button>Voltar ao Dashboard</button>
        </Link>
        <Link to="/mapa-coleta">
          <button>Ver Mapa de Coleta</button>
        </Link>
      </div>
    </div>
  );
}

export default CadastroPontos;
