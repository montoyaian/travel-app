import React from "react";
import PropTypes from "prop-types";
import '../../../Styles/cards.css'

function Card({id,image, id_flight, discount, customer_type,flight_type}) {

  return (
    <div className="card text-center bg-white animateanimated animatefadeInUp " style={{ width: '250px', marginRight: '200px' }}>
      <div className="overflow">
        <img src={image} alt="a wallpaper" className="card-img-top" style={{ width: '100%' }}/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title " style={{ color: 'black' }}>Descuento: {discount}%</h4>
        <p className="card-text text-secondary">Identificador del vuelo: {id_flight} </p>
        <p className="card-text text-secondary">Tipo de cliente: {customer_type} </p>
        <p className="card-text text-secondary">Tipo de vuelo: {flight_type} </p>
        <p className="card-text text-secondary">Identificador: {id} </p> 
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