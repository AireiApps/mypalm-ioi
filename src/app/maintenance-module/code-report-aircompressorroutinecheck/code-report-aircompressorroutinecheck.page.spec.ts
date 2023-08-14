import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportAircompressorroutinecheckPage } from './code-report-aircompressorroutinecheck.page';

describe('CodeReportAircompressorroutinecheckPage', () => {
  let component: CodeReportAircompressorroutinecheckPage;
  let fixture: ComponentFixture<CodeReportAircompressorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportAircompressorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportAircompressorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
