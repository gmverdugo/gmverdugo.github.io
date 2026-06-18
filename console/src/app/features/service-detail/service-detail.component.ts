import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../core/content/content.service';
import { ConsoleStore } from '../../core/state/console-store';
import { I18nService } from '../../core/i18n/i18n.service';
import { DisplayMetric } from '../../shared/metric-tile/metric-tile.component';
import { ConsoleCardComponent } from '../../shared/console-card/console-card.component';

interface ServiceDetailView {
  id: string;
  title: string;
  summary: string;
  metrics: DisplayMetric[];
  reportFile?: string;
  reportTitle: string;
  reportFallbackMessage: string;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [ConsoleCardComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  private content = inject(ContentService);
  private store = inject(ConsoleStore);
  private i18n = inject(I18nService);

  private readonly paramMap = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  readonly view = computed<ServiceDetailView | undefined>(() => {
    const id = this.paramMap().get('id');
    const persona = this.store.persona();
    const service = this.content.services().find(s => s.id === id);

    if (!service) {
      return undefined;
    }

    const framingPersona = service.personas.includes(persona) ? persona : service.personas[0];
    const summaryKey = `serviceDetail.${service.id}.summary.${framingPersona}`;

    return {
      id: service.id,
      title: this.i18n.t(service.titleKey),
      summary: this.i18n.t(summaryKey),
      metrics: service.metrics.map(metric => ({
        value: this.i18n.t(metric.valueKey),
        label: this.i18n.t(metric.labelKey),
        accent: metric.accent
      })),
      reportFile: service.reportFile,
      reportTitle: this.i18n.t(`serviceDetail.${service.id}.reportTitle`),
      reportFallbackMessage: this.i18n.t('serviceDetail.report.fallbackMessage')
    };
  });

  readonly notFoundMessage = computed(() => this.i18n.t('serviceDetail.notFound'));

  reportSrc(reportFile: string): string {
    return `/assets/reports/${reportFile}`;
  }
}
