import React, { useEffect, useState } from 'react';
import { DivAdd } from '../../../../components/DivAdd';
import { Divtable } from '../../../../components/Divtable';
import { Link } from 'react-router-dom';
import { confirmation, sendrequest } from '../../../../functions';
import Pagination from '../../../../components/Pagination';

export const Standart = () => {
  const [clientS, setClientS] = useState([]);
  const [classLoad, setClassload] = useState('');
  const [classTable, setTable] = useState('');
  const [page, setPage] = useState(1);
  const [postsPage, setPostsPage] = useState(10);
  const [search, setSearch] = useState('')

  useEffect(() => {
    getClientStandart();
  }, [page, postsPage]);

  const getClientStandart = async () => {
    const res = await sendrequest('GET', page, '/clients/get/clients/all/standard_client', '');
    setClientS(res);
    setTable('');
    setClassload('d-none');
  };

  const deleteClientStandart = (id, name) => {
    confirmation(name, ('/clients/delete/client/' + id +'/standard%20client'), '');
  };

  const offset = (page - 1) * postsPage;

  const filteredClientS = clientS.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="my-3">
        <input
          type="text"
          placeholder="Buscar Cliente"
          className="form-control form-control-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Divtable col="6" off="3" classLoad={classLoad} classTable={classTable}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Bookings</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {filteredClientS.slice(offset, offset + postsPage).map((row,i) => (
                 <tr key={row.id}>
                 <td>{offset + i + 1}</td>
                 <td>{row.name}</td>
                 <td>{row.contact}</td>
                 <td>{row.bookings}</td>
                 <td>{row.email}</td>
                 <td>
                   <Link to={'/client/editClientStandart/' + row.id} className="btn btn-warning">
                     <i className="fa-solid fa-edit">Editar</i>
                   </Link>
                 </td>
                 <td>
                   <button
                     className="btn btn-danger"
                     onClick={() => deleteClientStandart(row.id, row.name, row.contact, row.Description)}
                   >
                     <i className="fa-solid fa-trash">Eliminar</i>
                   </button>
                 </td>
               </tr>
            ))}
          </tbody>
        </table>
        <Pagination total={clientS.length} postsPage={postsPage} setPage={setPage} />
      </Divtable>
    </div>
  );
}
