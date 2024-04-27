import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmation, sendrequest } from '../../../functions';
import Pagination from '../../../components/Pagination';

export const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [classLoad, setClassload] = useState('');
  const [classTable, setTable] = useState('');
  const [page, setPage] = useState(1);
  const [postsPage, setPostsPage] = useState(10);

  useEffect(() => {
    getBookings();
  }, [page, postsPage]);

  const getBookings = async () => {
    const res = await sendrequest('GET', page, '/bookings/get/bookings/all', '');
    setBookings(res);
    setTable('');
    setClassload('d-none');
  };

  const deleteBooking = (id) => {
    confirmation(id, '/bookings/delete/booking/'+ id, '');
  };

  const offset = (page - 1) * postsPage;
  const currentBookings = bookings.slice(offset, offset + postsPage);

  return (
    <div className="container-fluid">
      <div className="my-3">
        <h1>LISTADO DE RESERVAS</h1>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Cantidad de Posiciones</th>
            <th>ID Vuelo</th>
            <th>ID Cliente</th>
            <th>Tipo de Vuelo</th>
            <th>Tipo de Cliente</th>
            <th>Costo de Posición</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {currentBookings.map((row, i) => (
            <tr key={row.id}>
              <td>{offset + i + 1}</td>
              <td>{row.Cant_position}</td>
              <td>{row.Id_flight}</td>
              <td>{row.Id_client}</td>
              <td>{row.Type_flight}</td>
              <td>{row.Type_client}</td>
              <td>{row.Cost_position}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBooking(row.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination total={bookings.length} postsPage={postsPage} setPage={setPage} />
    </div>
  );
};

export default ListBookings;