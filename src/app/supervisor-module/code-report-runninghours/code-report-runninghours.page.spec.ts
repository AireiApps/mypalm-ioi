import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportRunninghoursPage } from './code-report-runninghours.page';

describe('CodeReportRunninghoursPage', () => {
  let component: CodeReportRunninghoursPage;
  let fixture: ComponentFixture<CodeReportRunninghoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportRunninghoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportRunninghoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
