import { TestBed } from '@angular/core/testing';
import { ConsoleStore } from './console-store';

describe('ConsoleStore', () => {
  let store: ConsoleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(ConsoleStore);
  });

  it('should start with contractor persona', () => {
    expect(store.persona()).toBe('contractor');
  });

  it('should update persona signal when setPersona is called', () => {
    store.setPersona('security-ops');
    expect(store.persona()).toBe('security-ops');
    expect(store.personaLabel()).toBe('Security & Observability');
  });

  it('should update locale signal when setLocale is called', () => {
    expect(store.locale()).toBe('en');
    store.setLocale('es');
    expect(store.locale()).toBe('es');
  });
});
