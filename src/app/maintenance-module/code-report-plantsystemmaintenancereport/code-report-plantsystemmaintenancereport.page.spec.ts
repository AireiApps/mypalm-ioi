import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportPlantsystemmaintenancereportPage } from './code-report-plantsystemmaintenancereport.page';

describe('CodeReportPlantsystemmaintenancereportPage', () => {
  let component: CodeReportPlantsystemmaintenancereportPage;
  let fixture: ComponentFixture<CodeReportPlantsystemmaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportPlantsystemmaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportPlantsystemmaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
