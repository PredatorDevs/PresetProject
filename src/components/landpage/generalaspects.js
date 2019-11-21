import { uniqueId } from 'lodash';

export default [
    {
        id: uniqueId(),
        title: "Todo público",
        descrip: "La plataforma puede ser visitada por todas las personas que estén interesadas en obtener información sobre las empresas asociadas y productos publicados."
    },
    {
        id: uniqueId(),
        title: "Cualquier dispositivo",
        descrip: "La plataforma debe poder ser vista desde cualquier dispositivo, desde teléfonos celulares, tabletas electrónicas y computadoras personales, sin problemas."
    },
    {
        id: uniqueId(),
        title: "Informativo y veraz",
        descrip: "Toda la información proveída a la plataforma tendrá garantía de ser verídica y que ayude a todo interesado en obtener la información necesaria."
    },
    {
        id: uniqueId(),
        title: "Ofertas y servicios",
        descrip: "Dentro de la plataforma serán ofertados, en primera instancia, servicios de publicidad, y posterior a eso se ampliarán las áreas de servicios ofrecidos."
    },
]