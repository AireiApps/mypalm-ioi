import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorMachinelubricationReportPage } from './supervisor-machinelubrication-report.page';

describe('SupervisorMachinelubricationReportPage', () => {
  let component: SupervisorMachinelubricationReportPage;
  let fixture: ComponentFixture<SupervisorMachinelubricationReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorMachinelubricationReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorMachinelubricationReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
