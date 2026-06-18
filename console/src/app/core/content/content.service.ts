import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceTile } from './content.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private http = inject(HttpClient);

  readonly services = signal<ServiceTile[]>([]);

  constructor() {
    this.http.get<ServiceTile[]>('/assets/data/services.json')
      .subscribe(data => this.services.set(data));
  }
}
