import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportElectricityconsumptionPage } from './code-report-electricityconsumption.page';

describe('CodeReportElectricityconsumptionPage', () => {
  let component: CodeReportElectricityconsumptionPage;
  let fixture: ComponentFixture<CodeReportElectricityconsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportElectricityconsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportElectricityconsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
