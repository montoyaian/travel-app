import React, { useState, useEffect } from 'react'
import { DivAdd } from '../../../components/DivAdd'
import { Divtable } from '../../../components/Divtable'
import Pagination from '../../../components/Pagination'
import { confirmation, sendrequest } from '../../../functions'
import { Link } from 'react-router-dom'
import image1 from '../../../assets/Imagenes/Oferta_premium.jpg'
import image2 from '../../../assets/Imagenes/Oferta_standart.jpg'
import Card from './Card'

export const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [classLoad, setClassload] = useState('');
    const [classTable, setTable] = useState('');
    const [page, setPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    useEffect(() => {
        getOffers();
    }, [page, postsPage]);

    const getOffers = async () => {
        const res = await sendrequest('GET', '', '/offers/get/offers/all', '');
        setOffers(res);
        setTable('');
        setClassload('d-none');
    };

    const deleteOffers = (id, name) => {
        confirmation(name, ('/offers/delete/offer/' + id), '');
    };

    const offset = (page - 1) * postsPage;

    return (
        <div className="container-fluid">
            <DivAdd>
                <Link to="/addOffers" className="btn btn-dark">
                    <i className="fa-solid fa-circle-plus"></i> Agregar
                </Link>
            </DivAdd>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row ">
                    {offers.map(({ id, Id_flight, Discount, Customer_type, Flight_type }) => (
                        <div className="col-md-3 col-sm-6" key={id}>
                            {Customer_type === "premium client" && (
                                <div>
                                    <Card id={id} image={image1} id_flight={Id_flight} discount={Discount} customer_type={Customer_type} flight_type={Flight_type} />
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteOffers(id)}
                                    >
                                        <i className="fa-solid fa-trash"></i>Eliminar
                                    </button>
                                </div>
                            )}
                            {Customer_type === "standard client" && (
                                <div>
                                    <Card id={id} image={image2} id_flight={Id_flight} discount={Discount} customer_type={Customer_type} flight_type={Flight_type} />
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteOffers(id)}
                                    >
                                        <i className="fa-solid fa-trash"></i>Eliminar
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Offers