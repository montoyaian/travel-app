import React, { useState } from 'react';
import { sendrequest } from '../../../functions';
import { useParams, Link } from 'react-router-dom';

export const Bill = () => {
  const { id_booking } = useParams();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [billInfo, setBillInfo] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const fetchBill = async () => {
    try {
      const res = await sendrequest('POST', { payment_method: paymentMethod }, `/bookings/get/bill/${id_booking}`);
      if (res) {
        setBillInfo(res);
        setShowForm(false); // Oculta el formulario después de obtener los datos
      }
    } catch (error) {
      console.error('Error fetching bill:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBill();
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="paymentMethod"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            <span style={{ marginRight: "0.5rem", fontWeight: "bold" }}>
              Método de Pago:
            </span>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Seleccione el Método de Pago</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta">Tarjeta de Crédito</option>
              <option value="PSE">PSE</option>
              {/* Agrega más opciones si es necesario */}
            </select>
            <button type="submit" className="btn btn-primary" >Mostrar Factura</button>
          </label>
        </form>
      )}
      {billInfo && !showForm && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
          <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Factura</h1>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <p><strong>ID Reserva:</strong> {billInfo.id_booking}</p>
            <p><strong>Precio Total:</strong> {billInfo.total_price}$</p>
            <p><strong>Método de Pago:</strong> {billInfo.payment_method}</p>
            <p><strong>Cantidad de Posiciones:</strong> {billInfo.cant_positions}</p>
            <p><strong>ID Vuelo:</strong> {billInfo.id_flight}</p>
            <p><strong>Tipo de Vuelo:</strong> {billInfo.type_flight}</p>
            {billInfo.offer && (
              <div>
                <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>¡Oferta aplicada!</p>
                <p><strong>Id oferta:</strong> {billInfo.offer}</p>
                <p><strong>Descuento:</strong> {billInfo.discount}%</p>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/flight">
              <button className="btn btn-primary">&#8592; Regresar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bill;