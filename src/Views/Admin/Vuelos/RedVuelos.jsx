import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StandartClass from './Standart_Class/StandartClass';
import FirstClass from './First_Class/FirstClass';
import { CreateFligth } from './First_Class/CreateFligth';
import { EditFligth } from './First_Class/EditFligth';
import { CreateFligthS } from './Standart_Class/CreateFligthS';
import { EditFlightS } from './Standart_Class/EditFlightS';
import RutasReservas from '../Reservas/RutasReservas';

function RedVuelos() {
  return (
    <div>
      <Routes>
        <Route path="standart" element={<StandartClass />} />
        <Route path="createStandart" element={<CreateFligthS />} />
        <Route path="editStandart/:id" element={<EditFlightS />} />
        <Route path="bookings/*" element={<RutasReservas />} ></Route>

        <Route path="first" element={<FirstClass />} />
        <Route path="createFirst" element={<CreateFligth />} />
        <Route path="editFirst/:id" element={<EditFligth />} />
        <Route path="bookings/*" element={<RutasReservas />} ></Route>
      </Routes>
    </div>
  );
}

export default RedVuelos;