import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotcheckdailyreportPage } from './spotcheckdailyreport.page';

describe('SpotcheckdailyreportPage', () => {
  let component: SpotcheckdailyreportPage;
  let fixture: ComponentFixture<SpotcheckdailyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotcheckdailyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotcheckdailyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
