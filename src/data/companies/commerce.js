import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/commerce/pineda.png';

export default [
  {
    id: uniqueId(),
    nombre: 'Bienes Raíces Rodolfo Pineda',
    descrip: 'Compra, venta de casas, vehículos, construcción, remodelación y ampliación de viviendas. Servicio de asesoría legal y empresarial.',
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
]
