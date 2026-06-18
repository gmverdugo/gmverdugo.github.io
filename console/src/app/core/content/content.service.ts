import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential, ServiceTile } from './content.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private http = inject(HttpClient);

  readonly services = signal<ServiceTile[]>([]);
  readonly credentials = signal<Credential[]>([]);

  constructor() {
    this.http.get<ServiceTile[]>('/assets/data/services.json')
      .subscribe(data => this.services.set(data));
    this.http.get<Credential[]>('/assets/data/credentials.json')
      .subscribe(data => this.credentials.set(data));
  }
}
