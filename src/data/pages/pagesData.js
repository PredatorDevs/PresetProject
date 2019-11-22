import { uniqueId } from 'lodash';

export default [
  {
    id: uniqueId(),
    title: 'Comercio',
    descrip: 'Encuentra las mejores tiendas y establecimientos donde puedes adquirir tus productos cerca de tu localidad.',
    route: '/commerce',
  },
  {
    id: uniqueId(),
    title: 'Salud',
    descrip: 'La salud al alcance de tus manos. Tus servicios médicos de confianza a un solo click.',
    route: '/health',
  },
  {
    id: uniqueId(),
    title: 'Finanzas',
    descrip: '¿En busca de financiamiento para tus intereses? Estás en el lugar adecuado.',
    route: '/finance',
  },
  {
    id: uniqueId(),
    title: 'Vinos',
    descrip: 'Nada mejor que acompañar tus comidas con bebidas exquisitas y elaboradas con la mayor delicadeza, aprovechan las esencias que la tierra puede ofrecer.',
    route: '/wine',
  },
  {
    id: uniqueId(),
    title: 'Farmacéuticos',
    descrip: '¿Medicinas e insumos médicos? Busca aquí la farmacéutica que cubra tus necesidades.',
    route: '/pharma',
  },
  {
    id: uniqueId(),
    title: 'Transporte',
    descrip: 'Servicios de transporte y mudanza en un solo lugar. Contrata y comunícate con nuestros asociados.',
    route: '/transport',
  },
  {
    id: uniqueId(),
    title: 'Accesorios',
    descrip: 'Venta de artículos varios para tu hogar, oficina o establecimiento.',
    route: '/accessory',
  },
]
