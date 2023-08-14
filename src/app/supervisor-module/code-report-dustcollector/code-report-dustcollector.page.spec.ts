import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportDustcollectorPage } from './code-report-dustcollector.page';

describe('CodeReportDustcollectorPage', () => {
  let component: CodeReportDustcollectorPage;
  let fixture: ComponentFixture<CodeReportDustcollectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportDustcollectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportDustcollectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
