import type { Localized } from '../types';

export interface MethodCopy {
  tag: string;
  title: string;
  intro: string;
  rail: string[];
  items: { title: string; description: string }[];
}

export const method: Localized<MethodCopy> = {
  en: {
    tag: 'METHOD',
    title: 'Principles of practice',
    intro: 'Eight rules that shape every architecture decision, whatever the platform or the client.',
    rail: ['Engineering principles', '8 rules'],
    items: [
      {
        title: 'Security by design',
        description: 'Access control, encryption and audit trails are part of the first diagram, not a later patch.',
      },
      {
        title: 'Observability as a product',
        description: 'The platform has users, a roadmap and quality standards, like any other product.',
      },
      {
        title: 'Infrastructure as code',
        description: 'Every environment is defined in version control and can be rebuilt from it.',
      },
      { title: 'Automation over manual operations', description: 'If a task happens twice, it becomes a pipeline.' },
      {
        title: 'Operational simplicity',
        description: 'The simplest design that meets the requirement is the one that is easiest to run.',
      },
      {
        title: 'Scalable and resilient architecture',
        description: 'Capacity grows with the data, and failures are planned for rather than discovered.',
      },
      {
        title: 'Continuous improvement',
        description: 'Each release is measured and refined against the results of the previous one.',
      },
      {
        title: 'Knowledge transfer included',
        description: 'The client team learns the platform while it is built, so it stays theirs.',
      },
    ],
  },
  es: {
    tag: 'MÉTODO',
    title: 'Principios de trabajo',
    intro: 'Ocho reglas que guían cada decisión de arquitectura, sin importar la plataforma ni el cliente.',
    rail: ['Principios de ingeniería', '8 reglas'],
    items: [
      {
        title: 'Seguridad por diseño',
        description:
          'Control de acceso, cifrado y auditoría forman parte del primer diagrama, no de un parche posterior.',
      },
      {
        title: 'Observabilidad como producto',
        description:
          'La plataforma tiene usuarios, una hoja de ruta y estándares de calidad, como cualquier otro producto.',
      },
      {
        title: 'Infraestructura como código',
        description: 'Cada entorno se define en control de versiones y se puede reconstruir desde allí.',
      },
      {
        title: 'Automatización antes que operación manual',
        description: 'Si una tarea se repite dos veces, se convierte en un pipeline.',
      },
      {
        title: 'Simplicidad operativa',
        description: 'El diseño más simple que cumple el requisito es el más fácil de operar.',
      },
      {
        title: 'Arquitectura escalable y resiliente',
        description: 'La capacidad crece con los datos, y las fallas se planifican en lugar de descubrirse.',
      },
      {
        title: 'Mejora continua',
        description: 'Cada entrega se mide y se refina a partir de los resultados de la anterior.',
      },
      {
        title: 'Transferencia de conocimiento incluida',
        description: 'El equipo del cliente aprende la plataforma mientras se construye, para que siga siendo suya.',
      },
    ],
  },
};
