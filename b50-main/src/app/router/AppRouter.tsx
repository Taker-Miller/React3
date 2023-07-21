import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Saludo } from '../Componentes/Saludo';
import { Formulario } from '../Componentes/Formulario';
import { Registros } from '../Componentes/Registros';

import Consejos from '../Componentes/Consejos';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Saludo nombre={"Jose"} />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/mostrar" element={<Registros />} />
      <Route path="/Consejos" element={<Consejos />} /> 
    </Routes>
  );
};
