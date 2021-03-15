import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportHourlyreportingPage } from './report-hourlyreporting.page';

describe('ReportHourlyreportingPage', () => {
  let component: ReportHourlyreportingPage;
  let fixture: ComponentFixture<ReportHourlyreportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHourlyreportingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportHourlyreportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
