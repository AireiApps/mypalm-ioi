import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceChecklistreportPage } from './report-maintenance-checklistreport.page';

describe('ReportMaintenanceChecklistreportPage', () => {
  let component: ReportMaintenanceChecklistreportPage;
  let fixture: ComponentFixture<ReportMaintenanceChecklistreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceChecklistreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMaintenanceChecklistreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
