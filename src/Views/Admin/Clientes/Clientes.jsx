import React from 'react'
import { Link } from 'react-router-dom'
export const Clientes = () => {
  const styles = {
    card: {
      height: '200px', 
      marginBottom: '20px', 

    },
  };

  return (
    <div className="container mt-5">
    <h2 className="my-4 text-center">Clientes</h2>
    <div className="row justify-content-center">
      <div className="col-md-12 mb-4">
        <div className="card" style={styles.card}>
          <div className="card-body">
            <h5 className="card-title">Clientes Estándar</h5>
            <p className="card-text">Mira nuestros clientes estándar.</p>
            <Link to="clientstandart" className="btn btn-success btn-block">
              Ver Cliente Estándar
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div className="card" style={styles.card}>
          <div className="card-body">
            <h5 className="card-title">Clientes Premium</h5>
            <p className="card-text">Mira nuestros clientes premium.</p>
            <Link to="clientpremium" className="btn btn-primary btn-block">
              Ver Cliente Premium
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Clientes