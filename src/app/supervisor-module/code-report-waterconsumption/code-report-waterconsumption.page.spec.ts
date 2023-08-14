import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportWaterconsumptionPage } from './code-report-waterconsumption.page';

describe('CodeReportWaterconsumptionPage', () => {
  let component: CodeReportWaterconsumptionPage;
  let fixture: ComponentFixture<CodeReportWaterconsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportWaterconsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportWaterconsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
