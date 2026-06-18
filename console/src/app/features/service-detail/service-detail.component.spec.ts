import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ServiceDetailComponent } from './service-detail.component';
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
  },
  {
    id: 'icbc-enterprise-migration',
    titleKey: 'dashboard.tile.icbcMigration.title',
    headlineKeys: {
      contractor: 'dashboard.tile.icbcMigration.headline.contractor',
      architect: 'dashboard.tile.icbcMigration.headline.architect'
    },
    metrics: [
      { valueKey: 'dashboard.tile.icbcMigration.metric.nodeReduction.value', labelKey: 'dashboard.tile.icbcMigration.metric.nodeReduction.label', accent: 'teal' }
    ],
    personas: ['contractor', 'architect']
  }
];

const EN_DICT: Record<string, string> = {
  'dashboard.tile.hotTier.title': 'HOT Tier Optimization',
  'dashboard.tile.hotTier.metric.shardReduction.value': '10,150 → 8,173',
  'dashboard.tile.hotTier.metric.shardReduction.label': 'Shards (-19.5%)',
  'serviceDetail.notFound': 'Service not found.',
  'serviceDetail.report.fallbackMessage': 'This report panel could not be loaded right now.',
  'serviceDetail.hot-tier-optimization.reportTitle': 'Live report — HOT tier diagnostic',
  'serviceDetail.hot-tier-optimization.summary.security-ops': 'Closed a retention leak across 2,351 security indices.',
  'serviceDetail.hot-tier-optimization.summary.contractor': 'Diagnosed and fixed HOT tier over-sharding.',
  'serviceDetail.hot-tier-optimization.summary.architect': 'Resolved a 3.9x shard-budget overrun.',
  'dashboard.tile.icbcMigration.title': 'ICBC Enterprise Migration',
  'dashboard.tile.icbcMigration.metric.nodeReduction.value': '93 → 16 ERUs',
  'dashboard.tile.icbcMigration.metric.nodeReduction.label': 'Infrastructure (-83%)',
  'serviceDetail.icbc-enterprise-migration.reportTitle': 'ICBC Enterprise Migration — case study',
  'serviceDetail.icbc-enterprise-migration.summary.contractor': 'Delivered an 83% infrastructure optimization.',
  'serviceDetail.icbc-enterprise-migration.summary.architect': 'Re-architected a Platinum cluster into Enterprise.'
};

function setUp(serviceId: string) {
  return TestBed.configureTestingModule({
    imports: [ServiceDetailComponent],
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: { paramMap: convertToParamMap({ id: serviceId }) },
          paramMap: { subscribe: () => ({ unsubscribe: () => {} }) }
        }
      }
    ]
  }).compileComponents();
}

function flushContent(httpMock: HttpTestingController) {
  httpMock.expectOne('/assets/data/services.json').flush(SERVICES);
  httpMock.expectOne('/assets/i18n/en.json').flush(EN_DICT);
  httpMock.expectOne('/assets/i18n/es.json').flush({});
}

describe('ServiceDetailComponent', () => {
  let fixture: ComponentFixture<ServiceDetailComponent>;
  let httpMock: HttpTestingController;
  let store: ConsoleStore;

  describe('with a report-backed service (hot-tier-optimization)', () => {
    beforeEach(async () => {
      await setUp('hot-tier-optimization');

      httpMock = TestBed.inject(HttpTestingController);
      store = TestBed.inject(ConsoleStore);

      fixture = TestBed.createComponent(ServiceDetailComponent);
      fixture.detectChanges();

      flushContent(httpMock);
      fixture.detectChanges();
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('renders the title, summary, and metrics matching the originating dashboard tile', () => {
      const title = fixture.nativeElement.querySelector('.service-detail__title');
      const summary = fixture.nativeElement.querySelector('.service-detail__summary');
      const metricValue = fixture.nativeElement.querySelector('.service-detail__metric-value');

      expect(title.textContent.trim()).toBe('HOT Tier Optimization');
      expect(summary.textContent.trim().length).toBeGreaterThan(0);
      expect(metricValue.textContent.trim()).toBe('10,150 → 8,173');
    });

    it('renders an embedded report panel when the service has a reportFile', () => {
      const card = fixture.nativeElement.querySelector('app-console-card');
      expect(card).toBeTruthy();
    });

    it('shows the same page and report under both persona reads, with only framing copy differing', () => {
      store.setPersona('contractor');
      fixture.detectChanges();
      const contractorSummary = fixture.nativeElement.querySelector('.service-detail__summary').textContent.trim();
      const contractorMetric = fixture.nativeElement.querySelector('.service-detail__metric-value').textContent.trim();
      const contractorReport = fixture.nativeElement.querySelector('app-console-card');

      store.setPersona('architect');
      fixture.detectChanges();
      const architectSummary = fixture.nativeElement.querySelector('.service-detail__summary').textContent.trim();
      const architectMetric = fixture.nativeElement.querySelector('.service-detail__metric-value').textContent.trim();
      const architectReport = fixture.nativeElement.querySelector('app-console-card');

      expect(contractorSummary).not.toBe(architectSummary);
      expect(contractorMetric).toBe(architectMetric);
      expect(contractorReport).toBeTruthy();
      expect(architectReport).toBeTruthy();
    });
  });

  describe('with a case-study-only service (icbc-enterprise-migration)', () => {
    beforeEach(async () => {
      await setUp('icbc-enterprise-migration');

      httpMock = TestBed.inject(HttpTestingController);
      store = TestBed.inject(ConsoleStore);
      store.setPersona('contractor');

      fixture = TestBed.createComponent(ServiceDetailComponent);
      fixture.detectChanges();

      flushContent(httpMock);
      fixture.detectChanges();
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('renders the case-study summary with no embedded report panel', () => {
      const title = fixture.nativeElement.querySelector('.service-detail__title');
      const card = fixture.nativeElement.querySelector('app-console-card');

      expect(title.textContent.trim()).toBe('ICBC Enterprise Migration');
      expect(card).toBeFalsy();
    });
  });
});
