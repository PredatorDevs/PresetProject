import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/health/cleanpineda.jpeg';

export default [
  {
    id: uniqueId(),
    nombre: 'Pineda Caballero Clean Service',
    descrip: 'Le ofrece limpieza y mantenimiento. Presupuesto sin compromiso. Será un placer atenderle.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Limpieza de cochera',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Limpieza de jardin',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Limpieza de tejados',
        precio: 30,
      },
    ],
    portada: company1Logo,
  },
]
