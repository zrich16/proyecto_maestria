import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import Principal from '../pages/principal/principal';
import About from '../pages/about/about';
import Alquilar from '../pages/alquilar/alquilar';
import Buscar from '../pages/videojuegos/buscar';
import Detalle from '../pages/videojuegos/detalle';
import DetalleAlquiler from '../pages/alquilar/detallealquiler';

import Registrousuario from '../pages/usuario/registrousuario';
import Detalleusuario from '../pages/usuario/detalleusuario';
import Listausuario from '../pages/usuario/listausuario';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/principal" element={<Principal />} />
      <Route path="/about" element={<About />} />
      <Route path="/alquilar" element={<Alquilar />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/detalle" element={<Detalle />} />
       <Route path="/detallealquiler" element={<DetalleAlquiler />} />
       <Route path="/registrousuario" element={<Registrousuario />} />
        <Route path="/detalleusuario" element={<Detalleusuario />} />
          <Route path="/listausuario" element={<Listausuario />} />
    </Routes>
  );
}

export default AppRoutes;