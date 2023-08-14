import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportTaperheadandamperagecheckPage } from './code-report-taperheadandamperagecheck.page';

describe('CodeReportTaperheadandamperagecheckPage', () => {
  let component: CodeReportTaperheadandamperagecheckPage;
  let fixture: ComponentFixture<CodeReportTaperheadandamperagecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportTaperheadandamperagecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportTaperheadandamperagecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
