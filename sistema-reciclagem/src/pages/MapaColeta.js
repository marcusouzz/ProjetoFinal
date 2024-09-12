import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745, // Exemplo de latitude
  lng: -38.523, // Exemplo de longitude
};

function MapaColeta() {
  return (
    <div>
      <h1>Mapa de Coleta</h1>
      <LoadScript googleMapsApiKey="AIzaSyBTRUIK2EyZjbyZtoPcVosrmHen9GwnAAc">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
          {/* Adicione mais marcadores conforme necessário */}
        </GoogleMap>
      </LoadScript>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/">
          <button>Voltar ao Dashboard</button>
        </Link>
        <Link to="/cadastro-pontos">
          <button>Cadastrar Pontos de Coleta</button>
        </Link>
      </div>
    </div>
  );
}

export default MapaColeta;
