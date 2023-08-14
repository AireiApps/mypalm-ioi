import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachineroutinecheckPage } from './code-report-pressmachineroutinecheck.page';

describe('CodeReportPressmachineroutinecheckPage', () => {
  let component: CodeReportPressmachineroutinecheckPage;
  let fixture: ComponentFixture<CodeReportPressmachineroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportPressmachineroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportPressmachineroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
