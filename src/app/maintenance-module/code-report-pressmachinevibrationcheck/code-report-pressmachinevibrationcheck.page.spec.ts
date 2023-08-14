import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinevibrationcheckPage } from './code-report-pressmachinevibrationcheck.page';

describe('CodeReportPressmachinevibrationcheckPage', () => {
  let component: CodeReportPressmachinevibrationcheckPage;
  let fixture: ComponentFixture<CodeReportPressmachinevibrationcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportPressmachinevibrationcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportPressmachinevibrationcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
