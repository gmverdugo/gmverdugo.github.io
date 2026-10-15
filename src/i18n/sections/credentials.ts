import type { Localized } from '../types';

export interface CredentialsCopy {
  tag: string;
  title: string;
  intro: string;
  rail: { credentials: string; career: string };
  featured: {
    label: string;
    name: string;
    issuer: string;
    status: string;
    note: string;
  };
  secondaryLabel: string;
  secondary: { name: string; issuer: string; period?: string; kind: string }[];
  careerLabel: string;
  career: {
    role: string;
    org: string;
    period: string;
    current?: boolean;
    summary: string;
    points: string[];
  }[];
}

export const credentials: Localized<CredentialsCopy> = {
  en: {
    tag: 'CREDENTIALS',
    title: 'Credentials and career',
    intro:
      'One official vendor certification, formal technical training and a career built on enterprise infrastructure that evolved into observability and security monitoring.',
    rail: { credentials: '3 credentials', career: '2 roles, 2019 to present' },
    featured: {
      label: 'Featured certification',
      name: 'Elastic Certified Observability Engineer',
      issuer: 'Elastic',
      status: 'Official Elastic certification',
      note: 'Validates hands-on skills to deploy, operate and troubleshoot observability solutions on the Elastic Stack.',
    },
    secondaryLabel: 'Education and training',
    secondary: [
      {
        name: 'Data Networks and Telecommunications Technician',
        issuer: 'UNCUYO',
        period: '2019–2022',
        kind: 'Technical degree',
      },
      {
        name: 'Developer Security Education',
        issuer: 'E-commerce company',
        kind: 'Internal program',
      },
    ],
    careerLabel: 'Career',
    career: [
      {
        role: 'Enterprise Observability Architect',
        org: 'TSOFT',
        period: 'July 2022 to present',
        current: true,
        summary:
          'Enterprise observability and SIEM (security information and event management) platforms for a large e-commerce company, a top-tier bank and SAP BTP with OpenTelemetry.',
        points: [
          'Architecture reviews and capacity planning.',
          'Mentoring of engineers on observability practice.',
          'CI/CD automation with Jenkins, Terraform and Ansible.',
        ],
      },
      {
        role: 'Linux Infrastructure',
        org: 'Mendoza Central Entretenimientos S.A.',
        period: 'June 2019 to July 2022',
        summary: 'Enterprise Linux infrastructure operated to a 99.9% SLA (service level agreement).',
        points: [
          'Monitoring and deployment automation, with a 60% reduction in deployment time.',
          'Security hardening and disaster recovery planning.',
        ],
      },
    ],
  },
  es: {
    tag: 'CREDENCIALES',
    title: 'Credenciales y trayectoria',
    intro:
      'Una certificación oficial del fabricante, formación técnica formal y una carrera construida sobre infraestructura empresarial que evolucionó hacia observabilidad y monitoreo de seguridad.',
    rail: { credentials: '3 credenciales', career: '2 roles, 2019 a la actualidad' },
    featured: {
      label: 'Certificación destacada',
      name: 'Elastic Certified Observability Engineer',
      issuer: 'Elastic',
      status: 'Certificación oficial de Elastic',
      note: 'Valida la capacidad práctica para desplegar, operar y diagnosticar soluciones de observabilidad sobre Elastic Stack.',
    },
    secondaryLabel: 'Formación',
    secondary: [
      {
        name: 'Técnico en Redes de Datos y Telecomunicaciones',
        issuer: 'UNCUYO',
        period: '2019–2022',
        kind: 'Título técnico',
      },
      {
        name: 'Developer Security Education',
        issuer: 'Empresa de e-commerce',
        kind: 'Programa interno',
      },
    ],
    careerLabel: 'Trayectoria',
    career: [
      {
        role: 'Arquitecto de observabilidad empresarial',
        org: 'TSOFT',
        period: 'julio de 2022 a la actualidad',
        current: true,
        summary:
          'Plataformas empresariales de observabilidad y SIEM (gestión de información y eventos de seguridad) para una gran empresa de e-commerce, un banco de primer nivel y SAP BTP con OpenTelemetry.',
        points: [
          'Revisiones de arquitectura y planificación de capacidad.',
          'Mentoría de ingenieros en prácticas de observabilidad.',
          'Automatización de CI/CD con Jenkins, Terraform y Ansible.',
        ],
      },
      {
        role: 'Infraestructura Linux',
        org: 'Mendoza Central Entretenimientos S.A.',
        period: 'junio de 2019 a julio de 2022',
        summary: 'Infraestructura Linux empresarial operada con un SLA (acuerdo de nivel de servicio) del 99,9%.',
        points: [
          'Automatización de monitoreo y despliegues, con una reducción del 60% en el tiempo de despliegue.',
          'Hardening de seguridad y planificación de recuperación ante desastres.',
        ],
      },
    ],
  },
};
