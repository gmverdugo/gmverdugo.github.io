import { Component, input } from '@angular/core';

@Component({
  selector: 'app-role-badge',
  standalone: true,
  templateUrl: './role-badge.component.html',
  styleUrl: './role-badge.component.scss'
})
export class RoleBadgeComponent {
  roleName = input.required<string>();
  issuer = input.required<string>();
  grantedLabel = input.required<string>();
  grantedDate = input.required<string>();
  note = input<string>();
}
