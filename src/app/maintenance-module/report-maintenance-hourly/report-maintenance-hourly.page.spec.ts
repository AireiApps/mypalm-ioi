import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceHourlyPage } from './report-maintenance-hourly.page';

describe('ReportMaintenanceHourlyPage', () => {
  let component: ReportMaintenanceHourlyPage;
  let fixture: ComponentFixture<ReportMaintenanceHourlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceHourlyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMaintenanceHourlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
