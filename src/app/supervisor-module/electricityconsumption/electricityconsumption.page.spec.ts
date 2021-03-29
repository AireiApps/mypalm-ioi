import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectricityconsumptionPage } from './electricityconsumption.page';

describe('ElectricityconsumptionPage', () => {
  let component: ElectricityconsumptionPage;
  let fixture: ComponentFixture<ElectricityconsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityconsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricityconsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
