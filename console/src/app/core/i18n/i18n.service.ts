import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsoleStore } from '../state/console-store';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private store = inject(ConsoleStore);
  private http = inject(HttpClient);

  private en = signal<Record<string, string>>({});
  private es = signal<Record<string, string>>({});

  private dict = computed(() =>
    this.store.locale() === 'en' ? this.en() : this.es()
  );

  constructor() {
    this.http.get<Record<string, string>>('/assets/i18n/en.json')
      .subscribe(data => this.en.set(data));
    this.http.get<Record<string, string>>('/assets/i18n/es.json')
      .subscribe(data => this.es.set(data));
  }

  t(key: string): string {
    return this.dict()[key] ?? key;
  }
}
