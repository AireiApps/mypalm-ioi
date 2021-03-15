import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportLabdailyreportPage } from './report-labdailyreport.page';

describe('ReportLabdailyreportPage', () => {
  let component: ReportLabdailyreportPage;
  let fixture: ComponentFixture<ReportLabdailyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLabdailyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportLabdailyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
