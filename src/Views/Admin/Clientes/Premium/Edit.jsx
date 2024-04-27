import React from 'react'
import { useParams } from 'react-router-dom'
import FormularioClientP from '../../../../components/Formularios/FormularioClientP'
export const Edit = () => {
  const{id}=useParams()
  return (
    <FormularioClientP id={id} title='Edit Client'></FormularioClientP>
  )
}
