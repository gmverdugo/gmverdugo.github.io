import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { ConsoleStore } from '../state/console-store';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private store = inject(ConsoleStore);
  private http = inject(HttpClient);

  private dict = toSignal(
    toObservable(this.store.locale).pipe(
      switchMap(locale => this.http.get<Record<string, string>>(`/assets/i18n/${locale}.json`))
    ),
    { initialValue: {} as Record<string, string> }
  );

  t(key: string): string {
    return this.dict()[key] ?? key;
  }
}
