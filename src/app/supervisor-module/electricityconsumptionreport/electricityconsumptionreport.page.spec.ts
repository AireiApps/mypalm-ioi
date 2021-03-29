import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectricityconsumptionreportPage } from './electricityconsumptionreport.page';

describe('ElectricityconsumptionreportPage', () => {
  let component: ElectricityconsumptionreportPage;
  let fixture: ComponentFixture<ElectricityconsumptionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityconsumptionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricityconsumptionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
