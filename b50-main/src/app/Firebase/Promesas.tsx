import { Persona } from '../Interfaces/IFormulario';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './FirebaseApp';

export const registrarPersona = async (p: Persona) => {
  try {
    const docRef = await addDoc(collection(db, 'personas'), p);
    console.log('Documento registrado con ID:', docRef.id);
  } catch (error) {
    console.error('Error al registrar la persona:', error);
  }
};

export const obtenerPersonas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'personas'));
    const personas: Persona[] = [];
    querySnapshot.forEach((d) => {
      const p: Persona = {
        nombre: d.data().nombre,
        apellido: d.data().apellido,
        edad: d.data().edad,
        sexo: d.data().sexo,
        fechaNacimiento: d.data().fechaNacimiento,
        ciudad: d.data().ciudad,
        correoElectronico: d.data().correoElectronico, 
        idPersona: d.id,
      };
      personas.push(p);
    });
    return personas;
  } catch (error) {
    console.error('Error al obtener las personas:', error);
    return [];
  }
};
