import React, { useEffect, useState } from 'react'
import { DivAdd } from '../../../../components/DivAdd'
import { Divtable } from '../../../../components/Divtable'
import { Link, useParams } from 'react-router-dom'
import { confirmation, sendrequest } from '../../../../functions'
import Card from '../card'
import image1 from '../../../../assets/Imagenes/1366_2000.jpeg'
import storage from '../../../../Storage/storage'

export const FirstClass = () => {
  const { type_flight } = useParams()
  const [vuelos, setVuelos] = useState([])
  const [classLoad, setClassload] = useState('')
  const [classTable, setTable] = useState('')
  useEffect(() => {
    getVuelos()
  }, [])
  const getVuelos = async () => {
    const res = await sendrequest('GET', '', '/flight/get/flights/all/first_class', '')
    setVuelos(res)
    setTable('')
    setClassload('d-none')
  }
  const deleteVuelos = (id, name) => {
    confirmation(name, ('/flight/delete/flight/' + id + '/first%20class'), '')

  }
  const user_role = storage.get('user_role');
  return (
    <div className='container-fluid'>
      {user_role === 'admin' && (
        <DivAdd>
          <Link to='/flight/createFirst' className='btn btn-dark'>
            <i className='fa-solid fa-circle-plus'></i>
            Agregar
          </Link>
        </DivAdd>
      )}
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {vuelos.map(({ id, origin, destination, date, positions, hour, cost, id_agency }) => (
            <div className="col-md-4 col-sm-6" key={id}>
              <Card id={id} image={image1} origin={origin} destination={destination} date={date} positions={positions} hour={hour} cost={cost} id_agency={id_agency} />
              {user_role === 'admin' && (
                <>
                  <Link to={'/flight/editFirst/' + id} className='btn btn-success'>
                    <i className='fa-solid fa-edit'>Editar</i>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteVuelos(id, origin, destination, date, positions, hour, cost, id_agency)}
                  >
                    <i className="fa-solid fa-trash">Eliminar</i>
                  </button>
                  <Link to={'/flight/bookings/addBookings/' + id + '/first%20class'} className='btn btn-primary'>
                    <i className='fa-solid fa-edit'>Reservas</i>
                  </Link>

                </>
              )}
              {user_role === 'user' && (
                <>
                  <Link to={'/flight/bookings/addBookings/' + id + '/first%20class'} className='btn btn-primary'>
                    <i className='fa-solid fa-edit'>Reservas</i>
                  </Link>
                </>

              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FirstClass