import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { IamComponent } from './iam.component';
import { Credential } from '../../core/content/content.model';

const CREDENTIALS: Credential[] = [
  {
    id: 'secure-dev-go',
    titleKey: 'iam.credential.secureDevGo.title',
    issuer: 'Mercado Libre — Developer Security Education',
    completedDate: '10 Jul 2025'
  },
  {
    id: 'secure-dev-java',
    titleKey: 'iam.credential.secureDevJava.title',
    issuer: 'Mercado Libre — Developer Security Education',
    completedDate: '10 Jul 2025'
  },
  {
    id: 'secure-dev-python',
    titleKey: 'iam.credential.secureDevPython.title',
    issuer: 'Mercado Libre — Developer Security Education',
    completedDate: '10 Jul 2025'
  },
  {
    id: 'secure-dev-node',
    titleKey: 'iam.credential.secureDevNode.title',
    issuer: 'Mercado Libre — Developer Security Education',
    completedDate: '24 Jul 2025'
  },
  {
    id: 'ssdlc',
    titleKey: 'iam.credential.ssdlc.title',
    issuer: 'Mercado Libre — Developer Security Education',
    completedDate: '10 Jul 2025'
  }
];

const EN_DICT: Record<string, string> = {
  'iam.section.credentials.title': 'Granted Roles — Credentials',
  'iam.section.credentials.description': 'Security education completed and verified.',
  'iam.credential.completedOn': 'Completed',
  'iam.credential.secureDevGo.title': 'Secure Back-End Development Practices — Go',
  'iam.credential.secureDevJava.title': 'Secure Back-End Development Practices — Java',
  'iam.credential.secureDevPython.title': 'Secure Back-End Development Practices — Python',
  'iam.credential.secureDevNode.title': 'Secure Front-End Development Practices — Node.js',
  'iam.credential.ssdlc.title': 'Security in the Software Development Lifecycle (SSDLC)',
  'iam.section.aiCapability.title': 'Granted Role — AI-Agent-Assisted Development',
  'iam.section.aiCapability.roleLabel': 'Capability',
  'iam.section.aiCapability.description': 'This portfolio was built using AI-agent-assisted development practices.',
  'iam.section.aiCapability.note': 'No interactive demo for this capability.'
};

describe('IamComponent', () => {
  let fixture: ComponentFixture<IamComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IamComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(IamComponent);
    fixture.detectChanges();

    httpMock.expectOne('/assets/data/services.json').flush([]);
    httpMock.expectOne('/assets/data/credentials.json').flush(CREDENTIALS);
    httpMock.expectOne('/assets/i18n/en.json').flush(EN_DICT);
    httpMock.expectOne('/assets/i18n/es.json').flush({});

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('renders exactly the 5 verified credentials and nothing else', () => {
    const badges = fixture.nativeElement.querySelectorAll('app-role-badge');
    expect(badges.length).toBe(5);
  });

  it('renders a credential as a granted-role entry showing issuer and completion date, with no validity/expiry text anywhere', () => {
    const firstBadge = fixture.nativeElement.querySelector('app-role-badge');
    const role = firstBadge.querySelector('.role-badge__role');
    const issuer = firstBadge.querySelector('.role-badge__issuer');
    const granted = firstBadge.querySelector('.role-badge__granted');

    expect(role.textContent.trim()).toBe('Secure Back-End Development Practices — Go');
    expect(issuer.textContent.trim()).toBe('Mercado Libre — Developer Security Education');
    expect(granted.textContent.trim()).toBe('Completed 10 Jul 2025');

    const pageText = fixture.nativeElement.textContent.toLowerCase();
    expect(pageText).not.toMatch(/expir/);
    expect(pageText).not.toMatch(/valid until/);
    expect(pageText).not.toMatch(/vigente/);
  });

  it('renders the AI/agent-building capability entry with no interactive demo control present', () => {
    const capabilityBlock = fixture.nativeElement.querySelector('.iam__ai-capability');
    expect(capabilityBlock).toBeTruthy();
    expect(capabilityBlock.textContent).toContain('AI-agent-assisted development practices');

    const interactiveControls = capabilityBlock.querySelectorAll('button, a, input, [role="button"]');
    expect(interactiveControls.length).toBe(0);
  });
});
