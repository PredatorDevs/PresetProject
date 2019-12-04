import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/pharma/farmaroja.png';
import company2Logo from '../../assets/img/pharma/farmaspace.png';
import company3Logo from '../../assets/img/pharma/farmavenn.png';
import company4Logo from '../../assets/img/pharma/farmaverde.png';
import company5Logo from '../../assets/img/pharma/farmavilla.png';
import company6Logo from '../../assets/img/pharma/medix.png';

export default [
  {
    id: uniqueId(),
    nombre: 'Farmacias Rojas',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Revisión de la medicación',
        precio: 5,
      },
      {
        id: uniqueId(),
        nombre: 'Programa de mantenimiento y dispensación de metadona',
        precio: 20,
      },
      {
        id: uniqueId(),
        nombre: 'Tratamiento directamente observado en terapias concretas',
        precio: 10,
      },
    ],
    portada: company1Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Farmacias Espaciales',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Elaboración de Sistemas Personalizados de Dosificación (SPD)',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Programa de adherencia al tratamiento',
        precio: 15,
      },
      {
        id: uniqueId(),
        nombre: 'Servicio a pacientes adscritos a Servicios de Atención Domiciliaria',
        precio: 50,
      },
    ],
    portada: company2Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Farma-Venn',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Deshabituación tabáquica',
        precio: 35,
      },
      {
        id: uniqueId(),
        nombre: 'Atención Farmacéutica a pacientes institucionalizados en instituciones cerradas',
        precio: 150,
      },
      {
        id: uniqueId(),
        nombre: 'Medición del pulso, presión arterial y MAPA',
        precio: 40,
      },
    ],
    portada: company3Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Farmacia verde',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Peso y talla en adultos y bebés',
        precio: 10,
      },
      {
        id: uniqueId(),
        nombre: 'Pruebas bioquímicas realizadas con química seca',
        precio: 25,
      },
      {
        id: uniqueId(),
        nombre: 'Cribado de enfermedades ocultas',
        precio: 5,
      },
    ],
    portada: company4Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Farmacia de la Villa',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Campañas sanitarias dirigidas a la prevención de enfermedades y la promoción de la salud',
        precio: 200,
      },
      {
        id: uniqueId(),
        nombre: 'Programa de intercambio de jeringuillas',
        precio: 15,
      },
      {
        id: uniqueId(),
        nombre: 'Recomendaciones dietéticas',
        precio: 5,
      },
    ],
    portada: company5Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Medicinas X',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Servicios que precisan de titulación específica adicional',
        precio: 35,
      },
      {
        id: uniqueId(),
        nombre: 'Recomendaciones dietéticas',
        precio: 20,
      },
      {
        id: uniqueId(),
        nombre: 'Dermoconsulta',
        precio: 50,
      },
    ],
    portada: company6Logo,
  },
]
