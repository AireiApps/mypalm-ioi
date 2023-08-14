import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportProductionactivityandqualityreportPage } from './code-report-productionactivityandqualityreport.page';

describe('CodeReportProductionactivityandqualityreportPage', () => {
  let component: CodeReportProductionactivityandqualityreportPage;
  let fixture: ComponentFixture<CodeReportProductionactivityandqualityreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportProductionactivityandqualityreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportProductionactivityandqualityreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
