import { uniqueId } from 'lodash';

export default [
    {
        id: uniqueId(),
        nombre: "Bienes Raíces Rodolfo Pineda",
        descrip: "Compra, venta de casas, vehículos, construcción, remodelación y ampliación de viviendas. Servicio de asesoría legal y empresarial.",
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
        portada: require('../../../assets/img/transport/pineda.jpeg'),
    },
    {
        id: uniqueId(),
        nombre: "Pineda Caballero Clean Service",
        descrip: "Le ofrece limpieza y mantenimiento. Presupuesto sin compromiso. Será un placer atenderle.",
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
        portada: require('../../../assets/img/transport/cleanpineda.jpeg'),
    },
]