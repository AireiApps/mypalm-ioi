import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportLabhourlyreportPage } from './report-labhourlyreport.page';

describe('ReportLabhourlyreportPage', () => {
  let component: ReportLabhourlyreportPage;
  let fixture: ComponentFixture<ReportLabhourlyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLabhourlyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportLabhourlyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
