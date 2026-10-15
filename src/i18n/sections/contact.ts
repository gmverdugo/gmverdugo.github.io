import type { Localized } from '../types';

export interface ContactCopy {
  tag: string;
  quote: string;
  availability: string;
  location: string;
  emailLabel: string;
  linkedinLabel: string;
  locationLabel: string;
}

export const contact: Localized<ContactCopy> = {
  en: {
    tag: 'CONTACT',
    quote:
      'I started at the network layer and worked up the stack. I design observability that explains what a system is doing, and why.',
    availability: 'Open to in-house architecture and platform roles, and to independent consulting engagements.',
    location: 'Mendoza, Argentina',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Based in',
  },
  es: {
    tag: 'CONTACTO',
    quote:
      'Empecé en la capa de red y fui subiendo por el stack. Diseño observabilidad que explica qué está haciendo un sistema, y por qué.',
    availability:
      'Abierto a roles en relación de dependencia de arquitectura y plataforma, y a proyectos de consultoría independiente.',
    location: 'Mendoza, Argentina',
    emailLabel: 'Correo',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Ubicación',
  },
};
