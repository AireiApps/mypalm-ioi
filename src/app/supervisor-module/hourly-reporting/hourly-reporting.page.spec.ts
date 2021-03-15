import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HourlyReportingPage } from './hourly-reporting.page';

describe('HourlyReportingPage', () => {
  let component: HourlyReportingPage;
  let fixture: ComponentFixture<HourlyReportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyReportingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyReportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
