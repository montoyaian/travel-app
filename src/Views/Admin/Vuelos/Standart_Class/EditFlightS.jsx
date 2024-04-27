import React from 'react'
import FormularioStandart from '../../../../components/Formularios/Formulario_Standart'
import { useParams } from 'react-router-dom'
export const EditFlightS = () => {
  const {id}=useParams()
  return (
    <FormularioStandart id={id} title='Edit Flight'></FormularioStandart>
  )
}
export default EditFlightS
