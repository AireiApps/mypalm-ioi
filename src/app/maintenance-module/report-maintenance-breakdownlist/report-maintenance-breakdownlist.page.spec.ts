import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBreakdownlistPage } from './report-maintenance-breakdownlist.page';

describe('ReportMaintenanceBreakdownlistPage', () => {
  let component: ReportMaintenanceBreakdownlistPage;
  let fixture: ComponentFixture<ReportMaintenanceBreakdownlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceBreakdownlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMaintenanceBreakdownlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
