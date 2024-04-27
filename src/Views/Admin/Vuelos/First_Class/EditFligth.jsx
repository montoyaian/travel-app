import React from 'react'
import { FormularioVuelo } from '../../../../components/Formularios/FormularioVuelo'
import { useParams } from 'react-router-dom'
export const EditFligth = () => {
  const {id}= useParams()
  return (
    <FormularioVuelo id={id} title='Edit Flight'></FormularioVuelo>
  )
}
