import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeElectricityconsumptionPage } from './code-electricityconsumption.page';

describe('CodeElectricityconsumptionPage', () => {
  let component: CodeElectricityconsumptionPage;
  let fixture: ComponentFixture<CodeElectricityconsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeElectricityconsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeElectricityconsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
