import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ContactDialogComponent } from './contact-dialog.component';

const EN_DICT: Record<string, string> = {
  'contact.dialog.title': 'Get in touch',
  'contact.dialog.intro': 'Tell me what you need.',
  'contact.intent.hirePerson': 'Hire a person',
  'contact.intent.engageProject': 'Engage for a project',
  'contact.dialog.cancel': 'Cancel',
  'contact.dialog.submit': 'Send',
  'contact.mailto.hirePerson.subject': 'Hiring inquiry',
  'contact.mailto.hirePerson.body': 'I would like to hire you.',
  'contact.mailto.engageProject.subject': 'Project inquiry',
  'contact.mailto.engageProject.body': 'I would like to engage you for a project.'
};

describe('ContactDialogComponent', () => {
  let fixture: ComponentFixture<ContactDialogComponent>;
  let httpMock: HttpTestingController;
  let dialogRefCloseSpy: ReturnType<typeof vi.fn>;
  let setHrefSpy: ReturnType<typeof vi.fn<(value: string) => void>>;

  beforeEach(async () => {
    dialogRefCloseSpy = vi.fn();
    setHrefSpy = vi.fn<(value: string) => void>();

    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        set href(value: string) {
          setHrefSpy(value);
        },
        get href() {
          return 'http://localhost:3000/';
        }
      }
    });

    await TestBed.configureTestingModule({
      imports: [ContactDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNoopAnimations(),
        { provide: MatDialogRef, useValue: { close: dialogRefCloseSpy } }
      ]
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ContactDialogComponent);
    fixture.detectChanges();

    httpMock.expectOne('/assets/i18n/en.json').flush(EN_DICT);
    httpMock.expectOne('/assets/i18n/es.json').flush({});

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('has no intent selected by default and the form is invalid', () => {
    expect(fixture.componentInstance.form.controls.intent.value).toBeNull();
    expect(fixture.componentInstance.form.invalid).toBe(true);
  });

  it('disables the submit button until an intent is explicitly selected', () => {
    const submitBtn: HTMLButtonElement = fixture.nativeElement.querySelector('button[color="primary"]');
    expect(submitBtn.disabled).toBe(true);

    fixture.componentInstance.form.controls.intent.setValue('hire-person');
    fixture.detectChanges();

    expect(submitBtn.disabled).toBe(false);
  });

  it('blocks submit() with no mailto trigger and no dialog close when no intent is selected', () => {
    fixture.componentInstance.submit();

    expect(setHrefSpy).not.toHaveBeenCalled();
    expect(dialogRefCloseSpy).not.toHaveBeenCalled();
  });

  it('triggers a mailto link prefixed by the selected intent and closes the dialog, with no calendar step', () => {
    fixture.componentInstance.form.controls.intent.setValue('engage-project');
    fixture.detectChanges();

    fixture.componentInstance.submit();

    expect(setHrefSpy).toHaveBeenCalledTimes(1);
    const triggeredUrl = setHrefSpy.mock.calls[0][0] as string;
    expect(triggeredUrl).toContain('mailto:gonzalomartinverdugo@gmail.com');
    expect(triggeredUrl).toContain(encodeURIComponent('Project inquiry'));
    expect(dialogRefCloseSpy).toHaveBeenCalled();
  });

  it('prefixes the hire-a-person mailto differently than the engage-for-a-project mailto', () => {
    fixture.componentInstance.form.controls.intent.setValue('hire-person');
    fixture.detectChanges();
    fixture.componentInstance.submit();

    const triggeredUrl = setHrefSpy.mock.calls[0][0] as string;
    expect(triggeredUrl).toContain(encodeURIComponent('Hiring inquiry'));
  });
});
