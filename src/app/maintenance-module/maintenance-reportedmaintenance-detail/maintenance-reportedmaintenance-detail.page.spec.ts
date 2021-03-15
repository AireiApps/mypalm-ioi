import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceReportedmaintenanceDetailPage } from './maintenance-reportedmaintenance-detail.page';

describe('MaintenanceReportedmaintenanceDetailPage', () => {
  let component: MaintenanceReportedmaintenanceDetailPage;
  let fixture: ComponentFixture<MaintenanceReportedmaintenanceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceReportedmaintenanceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceReportedmaintenanceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
