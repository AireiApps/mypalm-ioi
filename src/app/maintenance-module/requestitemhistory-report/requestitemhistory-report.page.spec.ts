import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestitemhistoryReportPage } from './requestitemhistory-report.page';

describe('RequestitemhistoryReportPage', () => {
  let component: RequestitemhistoryReportPage;
  let fixture: ComponentFixture<RequestitemhistoryReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestitemhistoryReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestitemhistoryReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
