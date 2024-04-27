import React,{useState,useEffect} from 'react'
import { sendrequest } from '../../../functions';
import DivinputO from '../../../components/Inputs/DivinputO';

export const AddOffers = () => {
  const [idFlight, setIdFlight] = useState('');
  const [discount, setDiscount] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [flightType, setFlightType] = useState('');
  const fetchData = async () => {
    try {
      const res = await sendrequest('GET', '', '/offers/get/offers/all');
      // Actualizar estado con los datos obtenidos
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  const save = async (e) => {
    e.preventDefault();
    try {
      const offerData = {
        id_flight: idFlight,
        discount: discount,
        customer_type: customerType,
        flight_type: flightType,
      };

      // Envía los datos al servidor
      const res = await sendrequest('POST', offerData, '/offers/add/offers', '/offers');

      if (res) {
        setIdFlight('')
        setDiscount('')
        setCustomerType('')
        setFlightType('')
        fetchData()
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card border border-info">
            <div className="card-header bg info border border border-info">
              Agregar Oferta
            </div>
            <div className="card-body">
              <form onSubmit={save}>
                <DivinputO
                  type='number'
                  icon='fa-building'
                  value={idFlight}
                  className='form-control'
                  placeholder='ID de Vuelo'
                  handleChange={(e) => setIdFlight(e.target.value)}
                />
                <DivinputO
                  type='number'
                  icon='fa-building'
                  value={discount}
                  className='form-control'
                  placeholder='Descuento'
                  handleChange={(e) => setDiscount(e.target.value)}
                />
                <DivinputO
                  type='select'
                  icon='fa-building'
                  value={customerType}
                  className='form-control'
                  placeholder='Tipo de Cliente'
                  handleChange={(e) => setCustomerType(e.target.value)}
                >
                </DivinputO>
                <DivinputO
                  type='select'
                  icon='fa-building'
                  value={flightType}
                  className='form-control'
                  placeholder='Tipo de Vuelo'
                  handleChange={(e) => setFlightType(e.target.value)}
                >
                </DivinputO>
                <div className='d-grid col-10 mx-auto'>
                  <button type='submit' className='btn btn-dark'>
                    <i className='fa-solid fa-save me-1'></i>
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddOffers