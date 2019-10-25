import { uniqueId } from 'lodash';

export default [
    {
        id: uniqueId(),
        nombre: "Bienes Raíces Rodolfo Pineda",
        descrip: "Compra, venta de casas, vehículos, construcción, remodelación y ampliación de viviendas. Servicio de asesoría legal y empresarial.",
        portada: require('../../../assets/img/transport/pineda.jpeg'),
    },
    {
        id: uniqueId(),
        nombre: "Pineda Caballero Clean Service",
        descrip: "Le ofrece limpieza y mantenimiento. Presupuesto sin compromiso. Será un placer atenderle.",
        portada: require('../../../assets/img/transport/cleanpineda.jpeg'),
    },
]