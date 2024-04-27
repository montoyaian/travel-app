import React from 'react'
import '../../Styles/about.css'

export const About = () => {
  return (
    <>
    <div className="proyecto">
      <h1 className="subtitle">Travel company</h1>
        <p className="text">
        Una empresa de viajes opera sistemas separados para reservas, fidelización de clientes, proveedores.
        y portales de agencias de viajes creados mediante fusiones. Los datos están aislados en silos,
        limitar los conocimientos de los clientes. Lanzar rápidamente nuevas capacidades es un desafío. Complejo
        Las dependencias del sistema dificultan el mantenimiento.
        Los sistemas inconexos limitan la capacidad del proveedor de viajes para ofrecer viajes personalizados.
        experiencias. Por ejemplo, los historiales y preferencias de los clientes están dispersos, lo que restringe
        Capacidad de personalizar ofertas y recomendaciones. Los sistemas heredados entrelazados también crean
        exceso de gastos generales que frena la innovación. La empresa necesita datos compartidos y modulares.
        arquitectura para aumentar la satisfacción del cliente y acelerar el desarrollo.
        La solución implica crear microservicios orientados a capacidades de viaje como
        reservas y perfiles de clientes. Estos expondrían reservas relevantes y datos de clientes.
        API administradas por una puerta de enlace. Estos datos se transmiten a una plataforma de análisis en la nube para ML
        mejoramiento. Este enfoque descompone incrementalmente los sistemas en silos a lo largo del tiempo en
        Servicios enfocados y desacoplados que brindan acceso a datos unificados a través de API administradas.
      </p>
    </div>
    <h1>Acerca de Nosotros</h1>
    <ul>
        <li>Ronaldo: <a href="https://aboutronaldo.000webhostapp.com" target="_blank">«https://aboutronaldo.000webhostapp.com»</a> </li>
        <li>Martin: <a href="https://paginamartinx.000webhostapp.com/#cursos" target="_blank">«https://paginamartinx.000webhostapp.com/#cursos»</a> </li>
        <li>Ian:    <a href="https://ianprofileweb.000webhostapp.com/#inicio" target="_blank">«https://ianprofileweb.000webhostapp.com/#inicio»</a> </li>
    </ul>
    </>
  )
}