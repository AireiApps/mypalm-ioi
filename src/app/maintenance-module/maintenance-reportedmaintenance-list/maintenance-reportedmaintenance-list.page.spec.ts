import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceReportedmaintenanceListPage } from './maintenance-reportedmaintenance-list.page';

describe('MaintenanceReportedmaintenanceListPage', () => {
  let component: MaintenanceReportedmaintenanceListPage;
  let fixture: ComponentFixture<MaintenanceReportedmaintenanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceReportedmaintenanceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceReportedmaintenanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
