import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/transports/caligula.png';
import company2Logo from '../../assets/img/transports/greenmotors.png';
import company3Logo from '../../assets/img/transports/caminos.png';

export default [
  {
    id: uniqueId(),
    nombre: 'Calígula Transporte',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Transporte Empresarial',
        precio: 5,
      },
      {
        id: uniqueId(),
        nombre: 'Transporte Turístico',
        precio: 20,
      },
      {
        id: uniqueId(),
        nombre: 'Otros Servicios',
        precio: 10,
      },
    ],
    portada: company1Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Green Motors',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Transporte Empresarial',
        precio: 60,
      },
      {
        id: uniqueId(),
        nombre: 'Transporte Turístico',
        precio: 80,
      },
      {
        id: uniqueId(),
        nombre: 'Otros Servicios',
        precio: 90,
      },
    ],
    portada: company2Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Caminos del mañana',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Transporte Empresarial',
        precio: 80,
      },
      {
        id: uniqueId(),
        nombre: 'Transporte Turístico',
        precio: 60,
      },
      {
        id: uniqueId(),
        nombre: 'Otros Servicios',
        precio: 89,
      },
    ],
    portada: company3Logo,
  },
]
