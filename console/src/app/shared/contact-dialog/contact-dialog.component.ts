import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { I18nService } from '../../core/i18n/i18n.service';

export type ContactIntent = 'hire-person' | 'engage-project';

const CONTACT_EMAIL = 'gonzalomartinverdugo@gmail.com';

interface ContactForm {
  intent: FormControl<ContactIntent | null>;
}

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatRadioModule, MatButtonModule],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {
  private dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  i18n = inject(I18nService);

  readonly form = new FormGroup<ContactForm>({
    intent: new FormControl<ContactIntent | null>(null, Validators.required)
  });

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const intent = this.form.controls.intent.value;
    if (!intent) {
      return;
    }

    window.location.href = this.buildMailtoUrl(intent);
    this.dialogRef.close();
  }

  private buildMailtoUrl(intent: ContactIntent): string {
    const subjectKey = intent === 'hire-person'
      ? 'contact.mailto.hirePerson.subject'
      : 'contact.mailto.engageProject.subject';
    const bodyKey = intent === 'hire-person'
      ? 'contact.mailto.hirePerson.body'
      : 'contact.mailto.engageProject.body';

    const subject = encodeURIComponent(this.i18n.t(subjectKey));
    const body = encodeURIComponent(this.i18n.t(bodyKey));

    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }
}
