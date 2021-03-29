import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaterconsumptionreportPage } from './waterconsumptionreport.page';

describe('WaterconsumptionreportPage', () => {
  let component: WaterconsumptionreportPage;
  let fixture: ComponentFixture<WaterconsumptionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterconsumptionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaterconsumptionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
