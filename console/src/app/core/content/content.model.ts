import { Persona } from '../state/console-store';

export type Accent = 'teal' | 'blue' | 'amber' | 'rose' | 'violet';

export interface ServiceMetric {
  valueKey: string;
  labelKey: string;
  accent: Accent;
}

export interface ServiceTile {
  id: string;
  titleKey: string;
  headlineKeys: Partial<Record<Persona, string>>;
  metrics: ServiceMetric[];
  personas: Persona[];
  reportFile?: string;
}

export interface Credential {
  id: string;
  titleKey: string;
  issuer: string;
  completedDate: string;
}
