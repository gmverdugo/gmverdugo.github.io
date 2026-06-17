import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ConsoleStore } from '../../core/state/console-store';
import { ServiceTile } from '../../core/content/content.model';

const SERVICES: ServiceTile[] = [
  {
    id: 'hot-tier-optimization',
    titleKey: 'dashboard.tile.hotTier.title',
    headlineKeys: {
      'security-ops': 'dashboard.tile.hotTier.headline.securityOps',
      contractor: 'dashboard.tile.hotTier.headline.contractor',
      architect: 'dashboard.tile.hotTier.headline.architect'
    },
    metrics: [
      { valueKey: 'dashboard.tile.hotTier.metric.shardReduction.value', labelKey: 'dashboard.tile.hotTier.metric.shardReduction.label', accent: 'teal' }
    ],
    personas: ['security-ops', 'contractor', 'architect'],
    reportFile: 'diagnostico-hot-optimization.html'
  }
];

const EN_DICT: Record<string, string> = {
  'dashboard.tile.hotTier.title': 'HOT Tier Optimization',
  'dashboard.tile.hotTier.headline.securityOps': 'Closed a retention leak that kept security data live indefinitely',
  'dashboard.tile.hotTier.headline.contractor': 'Diagnosed and fixed HOT tier over-sharding on a live production cluster',
  'dashboard.tile.hotTier.headline.architect': 'Resolved 3.9x shard-budget overrun without adding hardware',
  'dashboard.tile.hotTier.metric.shardReduction.value': '10,150 → 8,173',
  'dashboard.tile.hotTier.metric.shardReduction.label': 'Shards (-19.5%)'
};

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: HttpTestingController;
  let store: ConsoleStore;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(ConsoleStore);
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    httpMock.expectOne('/assets/data/services.json').flush(SERVICES);
    httpMock.expectOne('/assets/i18n/en.json').flush(EN_DICT);
    httpMock.expectOne('/assets/i18n/es.json').flush({});

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('renders a service tile with a real metric value and no placeholder text', () => {
    const valueEl = fixture.nativeElement.querySelector('.metric-tile__value');
    expect(valueEl).toBeTruthy();
    expect(valueEl.textContent).toContain('10,150 → 8,173');
    expect(fixture.nativeElement.textContent).not.toMatch(/lorem ipsum/i);
    expect(fixture.nativeElement.textContent).not.toContain('Dashboard — PR3');
  });

  it('shows the same metric value but a different headline across personas', () => {
    store.setPersona('contractor');
    fixture.detectChanges();
    const contractorHeadline = fixture.nativeElement.querySelector('.metric-tile__headline').textContent.trim();
    const contractorValue = fixture.nativeElement.querySelector('.metric-tile__value').textContent.trim();

    store.setPersona('architect');
    fixture.detectChanges();
    const architectHeadline = fixture.nativeElement.querySelector('.metric-tile__headline').textContent.trim();
    const architectValue = fixture.nativeElement.querySelector('.metric-tile__value').textContent.trim();

    expect(contractorHeadline).not.toBe(architectHeadline);
    expect(contractorValue).toBe(architectValue);
  });

  it('navigates to the matching service-detail route when a tile is clicked', () => {
    const navigateSpy = vi.spyOn(router, 'navigate');
    const tile = fixture.nativeElement.querySelector('.metric-tile');
    tile.click();

    expect(navigateSpy).toHaveBeenCalledWith(['/services', 'hot-tier-optimization']);
  });
});
