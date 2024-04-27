import React, { useEffect, useState } from 'react';
import { sendrequest } from '../../functions';
import DivinputV from '../Inputs/Inputs_vuelos/DivinputV'

export const FormularioVuelo = (params) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [positions, setPositions] = useState('');
  const [hour, setHour] = useState('');
  const [id_agency, setId_agency] = useState('');
  const [premium_cost, setPremium_cost] = useState('');
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await sendrequest('GET', '', '/supplier/get/suppliername');
        if (res && res.length > 0) {
          setAgencies(res);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataV = async () => {
      if (params.id !== null) {
        try {
          const res = await sendrequest('GET', '', '/flight/get/flights/' + params.id + '/first_class');
          if (res) {
            setOrigin(res.origin || '');
            setDestination(res.destination || '');
            setDate(res.date || '');
            setPositions(res.positions || '');
            setHour(res.hour || '');
            setId_agency(res.id_agency || '');
            setPremium_cost(res.premium_cost || '');
          }
        } catch (error) {
          console.error('Error fetching flight data:', error);
        }
      }
    };

    fetchDataV();
  }, [params.id]);

  const save = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (params.id !== null) {
        res = await sendrequest('PUT', { origin, destination, date, positions, hour, id_agency, premium_cost }, '/flight/edit/Firstclass/' + params.id, '/flight/first');
      } else {
        res = await sendrequest('POST', { origin, destination, date, positions, hour, id_agency, premium_cost }, '/flight/add/Firstclass', '/flight/first');
      }

      if (res && res.data) {
        // Restablecer los campos después de guardar, si es necesario
        setOrigin('');
        setDestination('');
        setDate('');
        setPositions('');
        setHour('');
        setId_agency('');
        setPremium_cost('');
      }
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-4'>
          <div className='card border border-info'>
            <div className='card-header bg info border border border-info'>{params.title}</div>
            <div className='card-body'>
              <form onSubmit={save}>
                <DivinputV
                  type='text'
                  icon='fa-building'
                  value={origin}
                  className='form-control'
                  placeholder='Origen'
                  handleChange={(e) => setOrigin(e.target.value)}
                />
                <DivinputV
                  type='text'
                  icon='fa-building'
                  value={destination}
                  className='form-control'
                  placeholder='Destino'
                  handleChange={(e) => setDestination(e.target.value)}
                />
                <DivinputV
                  type='date'
                  icon='fa-calendar'
                  value={date}
                  className='form-control'
                  placeholder='Fecha'
                  handleChange={(e) => setDate(e.target.value)}
                />
                <DivinputV
                  type='number'
                  icon='fa-building'
                  value={positions}
                  className='form-control'
                  placeholder='Posiciones'
                  handleChange={(e) => setPositions(e.target.value)}
                />
                <DivinputV
                  type='time'
                  icon='fa-clock'
                  value={hour}
                  className='form-control'
                  placeholder='Hora'
                  handleChange={(e) => setHour(e.target.value)}
                />
                <DivinputV
                  type='select'
                  icon='fa-building'
                  value={id_agency}
                  className='form-control'
                  placeholder='Agencias'
                  handleChange={(e) => setId_agency(e.target.value)}
                  options={agencies.map((agency) => ({ value: agency.id, label: agency.name }))}
                  isLoading={loading}
                />
                <DivinputV
                  type='number'
                  icon='fa-building'
                  value={premium_cost}
                  className='form-control'
                  placeholder='Costo premium'
                  handleChange={(e) => setPremium_cost(e.target.value)}
                />
                <div className='d-grid col-10 mx-auto'>
                  <button className='btn btn-dark'>
                    <i className='fa-solid fa-save'></i>
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
};

export default FormularioVuelo;
