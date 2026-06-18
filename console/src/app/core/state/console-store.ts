import { Injectable, signal, computed } from '@angular/core';

export type Persona = 'security-ops' | 'contractor' | 'architect';
export type Locale = 'en' | 'es';

@Injectable({ providedIn: 'root' })
export class ConsoleStore {
  readonly persona = signal<Persona>('contractor');
  readonly locale = signal<Locale>('en');

  readonly personaLabel = computed(() => {
    const labels: Record<Persona, string> = {
      'security-ops': 'Security & Observability',
      'contractor': 'Independent Contractor',
      'architect': 'Elasticsearch Architect',
    };
    return labels[this.persona()];
  });

  setPersona(p: Persona): void {
    this.persona.set(p);
  }

  setLocale(l: Locale): void {
    this.locale.set(l);
  }
}
