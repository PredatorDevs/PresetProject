import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/wines/vinosoriente.jpeg';

export default [
  {
    id: uniqueId(),
    nombre: 'Vinos de oriente',
    descrip: 'Vinos de la mejor calidad del oriente del país.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Vinos de muchos sabores',
        precio: 10,
      },
    ],
    portada: company1Logo,
  },
]
