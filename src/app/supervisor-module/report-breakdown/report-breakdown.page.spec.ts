import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportBreakdownPage } from './report-breakdown.page';

describe('ReportBreakdownPage', () => {
  let component: ReportBreakdownPage;
  let fixture: ComponentFixture<ReportBreakdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBreakdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportBreakdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
