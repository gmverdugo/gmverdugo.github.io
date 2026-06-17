import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsoleCardComponent } from './console-card.component';

describe('ConsoleCardComponent', () => {
  let fixture: ComponentFixture<ConsoleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleCardComponent);
    fixture.componentRef.setInput('title', 'Live report — HOT tier diagnostic');
    fixture.componentRef.setInput('src', '/assets/reports/diagnostico-hot-optimization.html');
    fixture.componentRef.setInput('fallbackMessage', 'This report panel could not be loaded right now.');
    fixture.detectChanges();
  });

  it('renders an iframe pointing at the original, unmodified report asset', () => {
    const iframe: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(iframe.getAttribute('src')).toBe('/assets/reports/diagnostico-hot-optimization.html');
  });

  it('frames the panel with console chrome (title bar)', () => {
    const titleBar = fixture.nativeElement.querySelector('.console-card__title');
    expect(titleBar.textContent.trim()).toBe('Live report — HOT tier diagnostic');
  });

  it('shows a fallback message and removes the iframe when the report fails to load, without affecting the rest of the page', () => {
    const iframe: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
    iframe.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    const fallback = fixture.nativeElement.querySelector('.console-card__fallback-text');
    const iframeAfterFailure = fixture.nativeElement.querySelector('iframe');
    const titleBarAfterFailure = fixture.nativeElement.querySelector('.console-card__title');

    expect(fallback.textContent.trim()).toBe('This report panel could not be loaded right now.');
    expect(iframeAfterFailure).toBeFalsy();
    expect(titleBarAfterFailure.textContent.trim()).toBe('Live report — HOT tier diagnostic');
  });
});
