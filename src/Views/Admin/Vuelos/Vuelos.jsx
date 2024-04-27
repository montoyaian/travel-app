import React from 'react';
import { Link } from 'react-router-dom';

const Vuelos = () => {
  return (
    <div className="container mt-4">
    <h2 className="my-4 text-center">Vuelos</h2>
    <div className="row">
      <div className="col-md-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Vuelo Estándar</h5>
            <p className="card-text">Explora los vuelos estándar disponibles.</p>
            <Link to="standart" className="btn btn-success btn-block">
              Ver Vuelos Estándar
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Primera Clase</h5>
            <p className="card-text">Descubre los vuelos de primera clase disponibles.</p>
            <Link to="first" className="btn btn-primary btn-block">
              Ver Vuelos de Primera Clase
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Vuelos;