import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/finance/bancoEstadistico.png';
import company2Logo from '../../assets/img/finance/bancoMundial.png';
import company3Logo from '../../assets/img/finance/bancoOrganico.png';

export default [
  {
    id: uniqueId(),
    nombre: 'Banco Estadístico',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Venta de edificios',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de casas',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de terrenos',
        precio: 30,
      },
    ],
    portada: company1Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Banco Mundial',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Venta de edificios',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de casas',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de terrenos',
        precio: 30,
      },
    ],
    portada: company2Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Banco Orgánico',
    descrip: '',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Venta de edificios',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de casas',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Venta de terrenos',
        precio: 30,
      },
    ],
    portada: company3Logo,
  },
]
