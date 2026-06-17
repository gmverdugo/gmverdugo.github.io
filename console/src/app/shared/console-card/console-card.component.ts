import { Component, inject, input, output, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-console-card',
  standalone: true,
  templateUrl: './console-card.component.html',
  styleUrl: './console-card.component.scss'
})
export class ConsoleCardComponent {
  private sanitizer = inject(DomSanitizer);

  title = input.required<string>();
  src = input.required<string>();
  fallbackMessage = input.required<string>();

  reportLoadError = output<void>();

  readonly failed = signal(false);

  get safeSrc(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src());
  }

  onLoadError(): void {
    this.failed.set(true);
    this.reportLoadError.emit();
  }
}
