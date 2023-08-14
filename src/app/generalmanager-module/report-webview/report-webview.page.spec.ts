import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportWebviewPage } from './report-webview.page';

describe('ReportWebviewPage', () => {
  let component: ReportWebviewPage;
  let fixture: ComponentFixture<ReportWebviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportWebviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportWebviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
