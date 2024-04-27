import React from 'react'
import { useParams } from 'react-router-dom'
import FormularioClientS from '../../../../components/Formularios/FormularioClientS'

export const EditCS = () => {
  const {id}= useParams()
  return (
    <FormularioClientS id={id} title='Edit Client'></FormularioClientS>
  )
}

