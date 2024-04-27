import React, { useEffect, useState } from 'react';
import { DivAdd } from '../../../components/DivAdd';
import { Divtable } from '../../../components/Divtable';
import { Link } from 'react-router-dom';
import { confirmation, sendrequest } from '../../../functions';
import { Pagination } from '../../../components/Pagination';

export const Supplier = () => {
  const [proveedores, setProveedores] = useState([]);
  const [classLoad, setClassload] = useState('');
  const [classTable, setTable] = useState('');
  const [page, setPage] = useState(1);
  const [postsPage, setPostsPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  useEffect(() => {
    getProveedores();
  }, [page, postsPage]);

  const getProveedores = async () => {
    const res = await sendrequest('GET', page, '/supplier/get/supplier/all', '');
    setProveedores(res);
    setTable('');
    setClassload('d-none');
  };

  const deleteProveedores = (id, name) => {
    confirmation(name, ('/supplier/delete/supplier/' + id), '');
  };

  const offset = (page - 1) * postsPage;

  // Función de filtro para buscar proveedores
  const filteredProveedores = proveedores.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <DivAdd>
        <Link to="/create" className="btn btn-dark">
          <i className="fa-solid fa-circle-plus"></i> Agregar
        </Link>
      </DivAdd>
      <div className="my-3">
        <input
          type="text"
          placeholder="Buscar proveedor"
          className="form-control form-control-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Divtable col="6" off="3" classLoad={classLoad} classTable={classTable}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Proveedores</th>
              <th>Contacto</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {filteredProveedores.slice(offset, offset + postsPage).map((row, i) => (
              <tr key={row.id}>
                <td>{offset + i + 1}</td>
                <td>{row.name}</td>
                <td>{row.contact}</td>
                <td>{row.Description}</td>
                <td>
                  <Link to={'/edit/' + row.id} className="btn btn-warning">
                    <i className="fa-solid fa-edit">Editar</i>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProveedores(row.id, row.name, row.contact, row.Description)}
                  >
                    <i className="fa-solid fa-trash">Eliminar</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination total={filteredProveedores.length} postsPage={postsPage} setPage={setPage} />
      </Divtable>
    </div>
  );
};

export default Supplier;