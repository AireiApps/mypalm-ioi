import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceReportedmaintenanceNewPage } from './maintenance-reportedmaintenance-new.page';

describe('MaintenanceReportedmaintenanceNewPage', () => {
  let component: MaintenanceReportedmaintenanceNewPage;
  let fixture: ComponentFixture<MaintenanceReportedmaintenanceNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceReportedmaintenanceNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceReportedmaintenanceNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
