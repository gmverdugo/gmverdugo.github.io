import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsoleShellComponent } from './console-shell.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('ConsoleShellComponent', () => {
  let fixture: ComponentFixture<ConsoleShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleShellComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleShellComponent);
    fixture.detectChanges();
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
});
