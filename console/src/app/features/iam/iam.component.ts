import { Component, computed, inject } from '@angular/core';
import { ContentService } from '../../core/content/content.service';
import { I18nService } from '../../core/i18n/i18n.service';
import { RoleBadgeComponent } from '../../shared/role-badge/role-badge.component';

interface CredentialView {
  id: string;
  roleName: string;
  issuer: string;
  completedDate: string;
}

@Component({
  selector: 'app-iam',
  standalone: true,
  imports: [RoleBadgeComponent],
  templateUrl: './iam.component.html',
  styleUrl: './iam.component.scss'
})
export class IamComponent {
  private content = inject(ContentService);
  private i18n = inject(I18nService);

  readonly sectionTitle = computed(() => this.i18n.t('iam.section.credentials.title'));
  readonly sectionDescription = computed(() => this.i18n.t('iam.section.credentials.description'));
  readonly grantedLabel = computed(() => this.i18n.t('iam.credential.completedOn'));

  readonly credentials = computed<CredentialView[]>(() =>
    this.content.credentials().map(credential => ({
      id: credential.id,
      roleName: this.i18n.t(credential.titleKey),
      issuer: credential.issuer,
      completedDate: credential.completedDate
    }))
  );

  readonly aiCapabilityTitle = computed(() => this.i18n.t('iam.section.aiCapability.title'));
  readonly aiCapabilityRoleLabel = computed(() => this.i18n.t('iam.section.aiCapability.roleLabel'));
  readonly aiCapabilityDescription = computed(() => this.i18n.t('iam.section.aiCapability.description'));
  readonly aiCapabilityNote = computed(() => this.i18n.t('iam.section.aiCapability.note'));
}
