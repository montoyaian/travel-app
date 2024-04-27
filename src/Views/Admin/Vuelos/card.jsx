import React from "react";
import PropTypes from "prop-types";
import '../../../Styles/cards.css'

function Card({id, image, origin,destination,date,positions,hour,cost, id_agency}) {

  return (
    <div className="card text-center bg-white animate__animated animate__fadeInUp" >  
      <div className="overflow">
        <img src={image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title " style={{ color: 'black' }}>Origen: {origin}</h4>
        <h4 className="card-title " style={{ color: 'black' }}>Destino: {destination}</h4>
        <p className="card-text text-secondary">Puestos: {positions} </p>
        <p className="card-text text-secondary">fecha: {date} </p>
        <p className="card-text text-secondary">Hora: {hour} </p>
        <p className="card-text text-secondary">Costo: {cost} </p> 
        <p className="card-text text-secondary">Identificador: {id} </p> 
        <p className="card-text text-secondary">Identificador(Agencia): {id_agency} </p> 
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;