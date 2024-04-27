import React, { useEffect, useState } from 'react';
import { sendrequest } from '../../functions';
import DivinpuntSup from '../Inputs/DivinpuntSup';

export const FormularioSup = (params) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params.id !== null) {
      const fetchData = async () => {
        const res = await sendrequest('GET', '', ('/supplier/get/supplier/' + params.id));
        if (res) {
          setName(res.name || '');
          setContact(res.contact || '');
          setDescription(res.Description || '');
        }
      };
      fetchData();
    }
  }, [params.id]);

  const save = async (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Contact:', contact);
    console.log('Description:', description);

    if (params.id !== null) {
      const res = await sendrequest('PUT', { name, contact, description }, '/supplier/edit/supplier/' + params.id, '/supplier');
      if (res.status === true) {
        // Manejar el éxito, redireccionar o realizar otras acciones necesarias
      }
    } else {
      const res = await sendrequest('POST', { name, contact, description }, '/supplier/add/supplier', '/supplier');
      if (res.status === true) {
        // Manejar el éxito, redireccionar o realizar otras acciones necesarias
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-4'>
          <div className='card border border-info'>
            <div className='card-header bg info border border border-info'>
              {params.title}
            </div>
            <div className='card-body'>
              <form onSubmit={save}>
                <DivinpuntSup
                  type='text'
                  icon='fa-building'
                  value={name}
                  className='form-control'
                  placeholder='Name'
                  handleChange={(e) => setName(e.target.value)}
                />
                <DivinpuntSup
                  type='text'
                  icon='fa-building'
                  value={contact}
                  className='form-control'
                  placeholder='Contact'
                  handleChange={(e) => setContact(e.target.value)}
                />
                <DivinpuntSup
                  type='text'
                  icon='fa-building'
                  value={description}
                  className='form-control'
                  placeholder='Description'
                  handleChange={(e) => setDescription(e.target.value)}
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

export default FormularioSup;