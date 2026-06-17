import { Component, input, output } from '@angular/core';
import { Accent } from '../../core/content/content.model';

export interface DisplayMetric {
  value: string;
  label: string;
  accent: Accent;
}

@Component({
  selector: 'app-metric-tile',
  standalone: true,
  templateUrl: './metric-tile.component.html',
  styleUrl: './metric-tile.component.scss'
})
export class MetricTileComponent {
  title = input.required<string>();
  headline = input.required<string>();
  metrics = input.required<DisplayMetric[]>();
  accent = input<Accent>('teal');

  tileClick = output<void>();

  onClick(): void {
    this.tileClick.emit();
  }
}
