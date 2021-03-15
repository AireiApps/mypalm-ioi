import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportBoilerlogPage } from './report-boilerlog.page';

describe('ReportBoilerlogPage', () => {
  let component: ReportBoilerlogPage;
  let fixture: ComponentFixture<ReportBoilerlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBoilerlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportBoilerlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
