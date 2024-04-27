import React from 'react'
import '../../Styles/home.css'
import storage from '../../Storage/storage'
import image1 from '../../assets/HomeImagenes/slider1.jpg'
import image2 from '../../assets/HomeImagenes/slider2.jpg'
import image3 from '../../assets/HomeImagenes/slider3.jpg'
import image4 from '../../assets/HomeImagenes/acerca.jpg'
export const Home = () => {
  const user_role = storage.get('user_role');
  return (
    <div id="pagina">
        <main>
          <section className="container" data-id="1">
            <div className="slider-texts">
              <h1 className="subtitle">Viajes</h1>
              <p className="slider__review">
                Con Travel Company, no se trata solo de organizar tus viajes, se trata de convertir
                cada aventura en una experiencia inolvidable y verdaderamente placentera. Desde el momento
                en que comienzas a explorar las opciones y a soñar con tu próximo destino, estamos a tu lado
                para hacer que cada paso sea sencillo, emocionante y sin estrés.
              </p>
              <div className="botones">
                <a href='/flight' className="btn-1">Vuelos</a>
              </div>
            </div>
            <figure className="slider__picture">
              <img src={image1} className="slider__img" alt="Imagen de Viajes" />
            </figure>
          </section>

          <section className="container" data-id="2">
            <div className="slider-texts">
              <h1 className="subtitle">Ofertas</h1>
              <p className="slider__review">
                ¡Disfruta de imperdibles ofertas para tus vuelos! No dejes pasar la oportunidad de
                explorar nuevos destinos y vivir emocionantes aventuras al mejor precio. Encuentra
                tus vuelos ideales y planea tus próximas escapadas con nosotros. Viajar nunca fue tan
                accesible y emocionante. ¡Aprovecha estas ofertas ahora!
              </p>
              <div className="botones">
                <a href='/offers' className="btn-1">Ofertas</a>
              </div>
            </div>
            <figure className="slider__picture">
              <img src={image2} className="slider__img" alt="Imagen de Ofertas" />
            </figure>
          </section>

          <section className="container" data-id="3">
            <div className="slider-texts">
              <h1 className="subtitle">Sistema de fidelidad</h1>
              <p className="slider__review">
                Accede a nuestra lista de clientes premium, los cuales tendrán descuentos imperdibles
                al momento de reservar sus vuelos. ¿Cómo consigo ser cliente premium? El usuario que
                tenga registradas 4 o más reservas pasará automáticamente a nuestro listado de clientes
                premium y gozará de sus beneficios. Anímate y reserva.
              </p>
              <div className="botones">
                {user_role === 'admin' &&(
                  <a href='/client' className="btn-1">Clientes</a>
                )}
              </div>
            </div>
            <figure className="slider__picture">
              <img src={image3} className="slider__img" alt="Imagen de Libros" />
            </figure>
          </section>
  </main>
      <section className="info container" id="info">
        <div className="info-img">
          <img src={image4} alt="Imagen de libros científicos" />
        </div>
        <div className="info-txt">
          <h2>Acerca de nosotros</h2>
          <p>
          En Travel Company, creemos que viajar es más que un simple movimiento de un lugar 
          a otro; es la exploración de mundos desconocidos, la conexión con culturas diversas y 
          la creación de recuerdos que perduran para toda la vida. Somos mucho más que una agencia 
          de viajes; somos tus compañeros en la búsqueda de experiencias únicas y memorables.
          Nuestra misión es inspirarte a descubrir el mundo y vivir la vida al máximo. Queremos que experimentes 
          la emoción de explorar destinos lejanos, conocer nuevas culturas y sumergirte en paisajes asombrosos. 
          Nos esforzamos por proporcionarte las mejores ofertas, itinerarios personalizados y un servicio al cliente 
          excepcional para que tu viaje sea una experiencia inolvidable.
          </p>
          <a href='/about'  className="btn-2">Más información</a>
        </div>
      </section>

      <section className="horario" id="horario">
        <div className="horario-info container">
        <div className="horario-title ">  
           <h2>Horario</h2>
          </div>
          <div className="horario-txt">
            <div className="txt">
              <h4>Dirección</h4>
              <p>Colombia-Cartagena de Indias</p>
              <p>Urb.Horizonte - Carrera 3</p>
            </div>

            <div className="txt">
              <h4>Horario</h4>
              <p>Lunes a Viernes: 9am - 8pm</p>
              <p>Sábado a Domingo: 11am - 6pm</p>
            </div>

            <div className="txt">
              <h4>Teléfono</h4>
              <p>+57 409428329320</p>
              <p>+57 093120423890</p>
            </div>

            <div className="txt">
              <h4>Redes Sociales:</h4>
              <div className="socials">
                <a href="#">
                  <div className="social">
                    <img src='' alt="" />
                    <h4>travelcompany</h4>
                    <button type="button" className="btn  btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </a>
                <a href="#">
                  <div className="social">
                    <img src='' alt="" />
                    <h4>travelcompany</h4>
                    <button type="button" className="btn  btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </a>
                <a href="#">
                  <div className="social">
                    <img src='' alt="" />
                    <h4>travelcompany</h4>
                    <button type="button" className="btn  btn-floating mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};