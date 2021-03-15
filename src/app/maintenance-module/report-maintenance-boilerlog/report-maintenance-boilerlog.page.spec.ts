import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBoilerlogPage } from './report-maintenance-boilerlog.page';

describe('ReportMaintenanceBoilerlogPage', () => {
  let component: ReportMaintenanceBoilerlogPage;
  let fixture: ComponentFixture<ReportMaintenanceBoilerlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceBoilerlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMaintenanceBoilerlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
