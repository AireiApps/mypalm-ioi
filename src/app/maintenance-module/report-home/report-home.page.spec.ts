import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportHomePage } from './report-home.page';

describe('ReportHomePage', () => {
  let component: ReportHomePage;
  let fixture: ComponentFixture<ReportHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
