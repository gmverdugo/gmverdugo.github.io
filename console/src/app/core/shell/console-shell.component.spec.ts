import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ConsoleShellComponent } from './console-shell.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../shared/contact-dialog/contact-dialog.component';

describe('ConsoleShellComponent', () => {
  let fixture: ComponentFixture<ConsoleShellComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleShellComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNoopAnimations(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ConsoleShellComponent);
    fixture.detectChanges();

    httpMock.expectOne('/assets/i18n/en.json').flush({});
    httpMock.expectOne('/assets/i18n/es.json').flush({});

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should render the nav sidebar', () => {
    const nav = fixture.nativeElement.querySelector('.shell-nav');
    expect(nav).toBeTruthy();
  });

  it('should render the top bar', () => {
    const topbar = fixture.nativeElement.querySelector('.shell-topbar');
    expect(topbar).toBeTruthy();
  });

  it('should render nav links for dashboard, services, and iam', () => {
    const links = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(links.length).toBeGreaterThanOrEqual(3);
  });

  it('renders exactly one Contact CTA trigger in the top bar, reachable on every routed page since the shell wraps all routes', () => {
    const ctas = fixture.nativeElement.querySelectorAll('.contact-btn');
    expect(ctas.length).toBe(1);
  });

  it('opens the ContactDialogComponent when the Contact CTA is clicked', () => {
    const dialog = TestBed.inject(MatDialog);
    const openSpy = vi.spyOn(dialog, 'open');

    const ctaBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.contact-btn');
    ctaBtn.click();

    expect(openSpy).toHaveBeenCalledWith(ContactDialogComponent, expect.any(Object));
  });
});
