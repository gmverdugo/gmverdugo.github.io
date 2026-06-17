import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../core/content/content.service';
import { ConsoleStore } from '../../core/state/console-store';
import { I18nService } from '../../core/i18n/i18n.service';
import { MetricTileComponent, DisplayMetric } from '../../shared/metric-tile/metric-tile.component';

interface DashboardTile {
  id: string;
  title: string;
  headline: string;
  metrics: DisplayMetric[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MetricTileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private content = inject(ContentService);
  private store = inject(ConsoleStore);
  private i18n = inject(I18nService);
  private router = inject(Router);

  readonly tiles = computed<DashboardTile[]>(() => {
    const persona = this.store.persona();

    return this.content.services()
      .filter(service => service.personas.includes(persona))
      .map(service => ({
        id: service.id,
        title: this.i18n.t(service.titleKey),
        headline: this.i18n.t(service.headlineKeys[persona] ?? service.titleKey),
        metrics: service.metrics.map(metric => ({
          value: this.i18n.t(metric.valueKey),
          label: this.i18n.t(metric.labelKey),
          accent: metric.accent
        }))
      }));
  });

  openService(id: string): void {
    this.router.navigate(['/services', id]);
  }
}
