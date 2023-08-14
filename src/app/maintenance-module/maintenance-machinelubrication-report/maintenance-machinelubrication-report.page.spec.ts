import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceMachinelubricationReportPage } from './maintenance-machinelubrication-report.page';

describe('MaintenanceMachinelubricationReportPage', () => {
  let component: MaintenanceMachinelubricationReportPage;
  let fixture: ComponentFixture<MaintenanceMachinelubricationReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMachinelubricationReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceMachinelubricationReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
