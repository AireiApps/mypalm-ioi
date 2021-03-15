import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBreakdownPage } from './report-maintenance-breakdown.page';

describe('ReportMaintenanceBreakdownPage', () => {
  let component: ReportMaintenanceBreakdownPage;
  let fixture: ComponentFixture<ReportMaintenanceBreakdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceBreakdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMaintenanceBreakdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
