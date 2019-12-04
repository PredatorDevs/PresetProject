import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/accesories/akali.png';
import company2Logo from '../../assets/img/accesories/fitstore.png';
import company3Logo from '../../assets/img/accesories/tiendax.png';
import company4Logo from '../../assets/img/accesories/granola.png';

export default [
  {
    id: uniqueId(),
    nombre: 'Tienda Akali',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Ropa de toda marca',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Muebles rústicos',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Otros productos',
        precio: '-',
      },
    ],
    portada: company1Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Fit Store',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Ropa de toda marca',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Muebles rústicos',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Otros productos',
        precio: '-',
      },
    ],
    portada: company2Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Tienda X',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Ropa de toda marca',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Muebles rústicos',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Otros productos',
        precio: '-',
      },
    ],
    portada: company3Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Gran Ola',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Ropa de toda marca',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Muebles rústicos',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Otros productos',
        precio: '-',
      },
    ],
    portada: company4Logo,
  },
]
