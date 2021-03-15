import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportSopcompliancePage } from './report-sopcompliance.page';

describe('ReportSopcompliancePage', () => {
  let component: ReportSopcompliancePage;
  let fixture: ComponentFixture<ReportSopcompliancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSopcompliancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportSopcompliancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
