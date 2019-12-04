import { uniqueId } from 'lodash';

import company1Logo from '../../assets/img/health/cleanpineda.jpeg';
import company2Logo from '../../assets/img/health/cruzgaitan.jpeg';
import company3Logo from '../../assets/img/health/holyName.png';
import company4Logo from '../../assets/img/health/doctorMarino.png';
import company5Logo from '../../assets/img/health/doctorEscudo.png';
import company6Logo from '../../assets/img/health/clinicaOro.png';

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
  {
    id: uniqueId(),
    nombre: 'Clínica Médica Asistencial',
    descrip: 'Clínica de ultrasonido y medicina general, contamos con alto tecnología y excelente atención personal.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Atención a emabarazadas.',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica infantil',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica al adulto mayor',
        precio: 30,
      },
      {
        id: uniqueId(),
        nombre: 'Emergencias las 24 horas',
        precio: '-',
      },
      {
        id: uniqueId(),
        nombre: 'Pequeñas cirugías',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Cauterización de verrugas',
        precio: 30,
      },
      {
        id: uniqueId(),
        nombre: 'Ultrasonografías',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Capacitación empresarial de salud y seguridad ocupacional',
        precio: 30,
      },
    ],
    portada: company2Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Holy Name',
    descrip: 'Atención personalizada para adultos mayores.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Atención a emabarazadas.',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica infantil',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica al adulto mayor',
        precio: 30,
      },
    ],
    portada: company3Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Doctor Marino',
    descrip: 'La salud se disfruta como un buen coco a la orilla del mar.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Atención a emabarazadas.',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica infantil',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica al adulto mayor',
        precio: 30,
      },
    ],
    portada: company4Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Doctor Escudo',
    descrip: 'Protege a tus pequeños de las inclementes enfermedades.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Atención a emabarazadas.',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica infantil',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica al adulto mayor',
        precio: 30,
      },
    ],
    portada: company5Logo,
  },
  {
    id: uniqueId(),
    nombre: 'Clínica de Oro',
    descrip: 'Tu salud es tan valiosa como el oro, y tal cual es nuestra prioridad.',
    servicios: [
      {
        id: uniqueId(),
        nombre: 'Atención a emabarazadas.',
        precio: 50,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica infantil',
        precio: 40,
      },
      {
        id: uniqueId(),
        nombre: 'Atención médica al adulto mayor',
        precio: 30,
      },
    ],
    portada: company6Logo,
  },
]
