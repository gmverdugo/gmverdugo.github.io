import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleBadgeComponent } from './role-badge.component';

describe('RoleBadgeComponent', () => {
  let fixture: ComponentFixture<RoleBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleBadgeComponent);
    fixture.componentRef.setInput('roleName', 'Security in the Software Development Lifecycle (SSDLC)');
    fixture.componentRef.setInput('issuer', 'Mercado Libre — Developer Security Education');
    fixture.componentRef.setInput('grantedLabel', 'Completed');
    fixture.componentRef.setInput('grantedDate', '10 Jul 2025');
    fixture.detectChanges();
  });

  it('renders the role name, issuer, and completion date as a granted-role entry', () => {
    const role = fixture.nativeElement.querySelector('.role-badge__role');
    const issuer = fixture.nativeElement.querySelector('.role-badge__issuer');
    const granted = fixture.nativeElement.querySelector('.role-badge__granted');

    expect(role.textContent.trim()).toBe('Security in the Software Development Lifecycle (SSDLC)');
    expect(issuer.textContent.trim()).toBe('Mercado Libre — Developer Security Education');
    expect(granted.textContent.trim()).toBe('Completed 10 Jul 2025');
  });

  it('never renders any validity or expiration text', () => {
    const text = fixture.nativeElement.textContent.toLowerCase();
    expect(text).not.toMatch(/expir/);
    expect(text).not.toMatch(/valid until/);
    expect(text).not.toMatch(/vigente/);
  });
});
