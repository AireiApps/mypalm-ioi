import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinemaintenancereportPage } from './code-report-pressmachinemaintenancereport.page';

describe('CodeReportPressmachinemaintenancereportPage', () => {
  let component: CodeReportPressmachinemaintenancereportPage;
  let fixture: ComponentFixture<CodeReportPressmachinemaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportPressmachinemaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportPressmachinemaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
