import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/commerce/pineda.png';
import company2Logo from '../../assets/img/commerce/cafe.jpeg';

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
  {
    id: uniqueId(),
    nombre: 'Cafe Alegria',
    descrip: 'Somos una empresa dedicada en la exportación y distribución de café orgánico, satisfaciendo la demanda de café orgánico en cada hogar de la zona de oriente dando la mejor atención y cuidado a cada producto vendido por nuestras manos, elegimos la mejor materia prima para realizar nuestro café es extraído de las cordilleras del departamento de Usuluán municipio de alegría de esta forma el sabor y calidad es de primera',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Cafe 1lb',
        precio: 3.75,
      },
    ],
    portada: company2Logo,
  },
]