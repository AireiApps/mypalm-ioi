import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinelubricationreportPage } from './code-report-pressmachinelubricationreport.page';

describe('CodeReportPressmachinelubricationreportPage', () => {
  let component: CodeReportPressmachinelubricationreportPage;
  let fixture: ComponentFixture<CodeReportPressmachinelubricationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportPressmachinelubricationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportPressmachinelubricationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
