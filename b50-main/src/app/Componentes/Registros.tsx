import React, { useEffect, useState } from 'react';
import { obtenerPersonas } from '../Firebase/Promesas';
import { Persona } from '../Interfaces/IFormulario';

export const Registros = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    obtenerPersonas().then((listado) => {
      console.log("Ya toy listo");
      console.log(listado);
      setPersonas(listado);
    });
  }, []);

  const renderizarDatos = () => {
    return personas.map((p) => (
      <tr key={p.idPersona}>
        <td>{p.nombre}</td>
        <td>{p.apellido}</td>
        <td>{p.edad}</td>
        <td>{p.sexo}</td>
        <td>{p.fechaNacimiento}</td>
        <td>{p.ciudad}</td> 
        <td>{p.correoElectronico}</td> 
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Fecha_Nacimiento</th>
          <th>Ciudad</th> 
          <th>Correo </th> 
        </tr>
      </thead>
      <tbody>{renderizarDatos()}</tbody>
    </table>
  );
};
