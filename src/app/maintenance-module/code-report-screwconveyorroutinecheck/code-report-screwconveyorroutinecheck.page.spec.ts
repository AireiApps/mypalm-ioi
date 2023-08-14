import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportScrewconveyorroutinecheckPage } from './code-report-screwconveyorroutinecheck.page';

describe('CodeReportScrewconveyorroutinecheckPage', () => {
  let component: CodeReportScrewconveyorroutinecheckPage;
  let fixture: ComponentFixture<CodeReportScrewconveyorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportScrewconveyorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportScrewconveyorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
