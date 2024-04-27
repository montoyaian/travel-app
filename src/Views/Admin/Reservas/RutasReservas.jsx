import React from 'react'
import FormularioReservas from '../../../components/Formularios/FormularioReservas'
import { Routes, Route } from 'react-router-dom'
import Bill from './Bill'
export const RutasReservas = () => {
  return (
    <div>
        <Routes>
            <Route path="addBookings/:id/:type_flight" element={<FormularioReservas />}></Route>  
            <Route path="bill/:id_booking" element={<Bill />}></Route>
        </Routes>
    </div>
  )
}
export default RutasReservas