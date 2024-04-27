import React, { useEffect, useState } from 'react';
import { DivAdd } from '../../../../components/DivAdd';
import { Divtable } from '../../../../components/Divtable';
import { Link } from 'react-router-dom';
import { confirmation, sendrequest } from '../../../../functions';
import Pagination from '../../../../components/Pagination';

export const Premium = () => {
  const [client, setClient] = useState([]);
  const [classLoad, setClassload] = useState('');
  const [classTable, setTable] = useState('');
  const [page, setPage] = useState(1);
  const [postsPage, setPostsPage] = useState(10);
  const [search, setSearch] = useState('')

  useEffect(() => {
    getClientPremium();
  }, [page, postsPage]);

  const getClientPremium = async () => {
    const res = await sendrequest('GET', page, '/clients/get/premiumclient', '');
    setClient(res);
    setTable('');
    setClassload('d-none');
  };

  const deleteClientPremium = (id, name) => {
    confirmation(name, ('/clients/delete/client/' + id +'/premium%20client'), '');
  };

  const offset = (page - 1) * postsPage;

  const filteredClient = client.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="my-3">
        <input
          type="text"
          placeholder="Buscar proveedor"
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
            {filteredClient.slice(offset, offset + postsPage).map((row,i) => (
                 <tr key={row.id}>
                 <td>{offset + i + 1}</td>
                 <td>{row.name}</td>
                 <td>{row.contact}</td>
                 <td>{row.Bookings}</td>
                 <td>{row.Email}</td>
                 <td>
                   <Link to={'/client/editClientPremium/' + row.id} className="btn btn-warning">
                     <i className="fa-solid fa-edit">Editar</i>
                   </Link>
                 </td>
                 <td>
                   <button
                     className="btn btn-danger"
                     onClick={() => deleteClientPremium(row.id, row.name, row.contact, row.Description)}
                   >
                     <i className="fa-solid fa-trash">Eliminar</i>
                   </button>
                 </td>
               </tr>
            ))}
          </tbody>
        </table>
        <Pagination total={client.length} postsPage={postsPage} setPage={setPage} />
      </Divtable>
    </div>
  );
};

export default Premium
