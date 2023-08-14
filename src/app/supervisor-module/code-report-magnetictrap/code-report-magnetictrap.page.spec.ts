import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportMagnetictrapPage } from './code-report-magnetictrap.page';

describe('CodeReportMagnetictrapPage', () => {
  let component: CodeReportMagnetictrapPage;
  let fixture: ComponentFixture<CodeReportMagnetictrapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportMagnetictrapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportMagnetictrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
