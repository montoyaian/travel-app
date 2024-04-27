import React, { useEffect, useState } from 'react';
import DivinputR from '../Inputs/DivinputR';
import { sendrequest } from '../../functions';
import { useNavigate, useParams } from 'react-router-dom';

const FormularioReservas = () => {
  const { id, type_flight } = useParams();
  const [cant_positions, setCant_positions] = useState('');
  const [id_client, setId_Client] = useState('');
  const [type_client, setTypeClient] = useState('');
  const Navigate = useNavigate();
  useEffect(()=> {
    if (!type_flight) {
      console.error('Error: Tipo de vuelo no especificado en la URL');
      // Manejamos la ausencia del tipo de vuelo en la URL
    } else {
      console.log('Tipo de vuelo:', type_flight); 
    }
  },)
  const save = async (e) => {
    e.preventDefault();

    if (!id || !type_flight) {
      console.error('Error: id or typeflight is undefined');
      return;
    }

    try {
      let postData = {
        cant_positions: cant_positions,
        id_client: id_client,
        type_client: type_client,
      };

      // Con el metodo "GET", conseguimos todas las ofertas disponibles y validamos si el id de la reserva 
      const offerRes = await sendrequest('GET', '', `/offers/get/offers/all${id}`);
      if (offerRes && offerRes.offer) {
        postData = {
          ...postData,
          offer_id: offerRes.offer.id, // Guardar el ID de la oferta
          discount: offerRes.offer.discount, // Guardar el descuento
        };
      }

      const res = await sendrequest('POST', postData, `/bookings/add/booking/${id}/${type_flight}`, '');

      if (res) {
        setCant_positions('');
        setId_Client('');
        setTypeClient('');
        Navigate(`/flight/bookings/bill/${res.id}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-outline mb-4">
      <form onSubmit={save}>
        <DivinputR
          type='number'
          icon='fa-building'
          value={cant_positions}
          className='form-control'
          placeholder='Cant_Positions'
          handleChange={(e) => setCant_positions(e.target.value)}
        />
        <DivinputR
          type='number'
          icon='fa-building'
          value={id_client}
          className='form-control'
          placeholder='Id_cliente'
          handleChange={(e) => setId_Client(e.target.value)}
        />
        <DivinputR
          type='select'
          icon='fa-building'
          value={type_client}
          className='form-control'
          placeholder='Tipo de Cliente'
          handleChange={(e) => setTypeClient(e.target.value)}
        />
        <div className='d-grid col-10 mx-auto'>
          <button type='submit' className='btn btn-dark'>
            <i className='fa-solid fa-save me-1'></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioReservas;