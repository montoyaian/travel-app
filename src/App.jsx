import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Supplier } from './Views/Admin/Proveedores/indexsup';
import {Createsup} from './Views/Admin/Proveedores/createsup';
import { Editsup} from './Views/Admin/Proveedores/editsup';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Register } from './Views/Admin/Register';
import { Home } from './Views/Admin/Home';
import Login from './Views/Admin/Login';
import { About } from './Views/Admin/About';
import Vuelos from './Views/Admin/Vuelos/Vuelos';
import RedVuelos from './Views/Admin/Vuelos/RedVuelos';
import { Clientes } from './Views/Admin/Clientes/Clientes';
import RutasClient from './Views/Admin/Clientes/RutasClient';
import ListBookings from './Views/Admin/Reservas/listBookings';
import Offers from './Views/Admin/Ofertas/Offers';
import './Styles/App.css'
import AddOffers from './Views/Admin/Ofertas/AddOffers';
function App() {
  return (
    <div className='cuerpo'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/supplier" element={<Supplier />} /> {/* Las rutas de Proveedores para acceder a cada funcion se establecieron directamente en App, en vez de crear un componente para definirlas.*/ }
            <Route path="/create" element={<Createsup />} />
            <Route path="/edit/:id" element={<Editsup />} /> {/* Corregir la ruta aquí */}
            <Route path='/flight' element={<Vuelos />}></Route>
            <Route path='/flight/*' element={<RedVuelos />} />
            <Route path='/client' element={<Clientes />}></Route>
            <Route path='/client/*' element={<RutasClient />}></Route>
            <Route path='listBookings' element={<ListBookings />}></Route>
            <Route path='/offers' element={<Offers />}></Route> {/*El mismo caso de las vitas "Suppliers", solo que con ofertas.*/ }
            <Route path='/addOffers' element={<AddOffers />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;