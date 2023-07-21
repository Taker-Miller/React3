import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorSexo, setErrorSexo] = useState('');

  const registrar = () => {
    if (nombre.trim() === '') {
      setErrorNombre('No valen espacios en blanco');
      return;
    } else {
      setNombre(nombre.trim());
      setErrorNombre('');
    }

    if (!sexo) {
      setErrorSexo('Seleccione una opción');
      return;
    } else {
      setErrorSexo('');
    }

    // Asumamos que se validó todo
    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      sexo,
      fechaNacimiento,
      ciudad,
      correoElectronico,
    };
    registrarPersona(p);
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(sexo);
    console.log(fechaNacimiento);
    console.log(ciudad);
    console.log(correoElectronico);
    alert('Bienvenido ' + nombre + ' ' + apellido);
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre('Debe tener más de 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  const handleSexoChange = (valor: string) => {
    setSexo(valor);
    setErrorSexo('');
  };

  return (
    <form>
      <label>Nombre: </label>
      <br />
      <input
        type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <span>{errorNombre}</span>
      <br />

      <label>Apellido: </label>
      <br />
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <br />

      <label>Edad: </label>
      <br />
      <input
        type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      />
      <br />

      <label>Sexo:</label>
      <br />
      <input
        type="radio"
        name="sexo"
        value="masculino"
        checked={sexo === 'masculino'}
        onChange={(e) => handleSexoChange(e.target.value)}
      />
      Masculino
      <br />
      <input
        type="radio"
        name="sexo"
        value="femenino"
        checked={sexo === 'femenino'}
        onChange={(e) => handleSexoChange(e.target.value)}
      />
      Femenino
      <br />
      <span>{errorSexo}</span>
      <br />

      <label>Fecha de Nacimiento:</label>
      <br />
      <input
        type="date"
        onChange={(e) => setFechaNacimiento(e.target.value)}
        value={fechaNacimiento}
      />
      <br />

      <label>Ciudad:</label>
      <br />
      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Copiapó">Copiapó</option>
        <option value="Caldera">Caldera</option>
        <option value="Paipote">Paipote</option>
      </select>
      <br />

      <label>Correo Electrónico:</label>
      <br />
      <input
        type="email"
        onChange={(e) => setCorreoElectronico(e.target.value)}
        value={correoElectronico}
      />
      <br />

      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
  );
};
