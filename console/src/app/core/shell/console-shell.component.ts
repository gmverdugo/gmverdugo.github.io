import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConsoleStore, Persona } from '../state/console-store';
import { I18nService } from '../i18n/i18n.service';
import { ContactDialogComponent } from '../../shared/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-console-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './console-shell.component.html',
  styleUrl: './console-shell.component.scss'
})
export class ConsoleShellComponent {
  store = inject(ConsoleStore);
  i18n = inject(I18nService);
  private dialog = inject(MatDialog);

  readonly personas: { id: Persona; labelKey: string }[] = [
    { id: 'security-ops', labelKey: 'shell.project.security-ops' },
    { id: 'contractor', labelKey: 'shell.project.contractor' },
    { id: 'architect', labelKey: 'shell.project.architect' },
  ];

  selectPersona(p: Persona): void {
    this.store.setPersona(p);
  }

  toggleLocale(): void {
    this.store.setLocale(this.store.locale() === 'en' ? 'es' : 'en');
  }

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent, { width: '480px' });
  }
}
