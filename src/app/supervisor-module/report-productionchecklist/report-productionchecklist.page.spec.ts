import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportProductionchecklistPage } from './report-productionchecklist.page';

describe('ReportProductionchecklistPage', () => {
  let component: ReportProductionchecklistPage;
  let fixture: ComponentFixture<ReportProductionchecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductionchecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportProductionchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
