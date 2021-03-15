import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorProductionreportPage } from './supervisor-productionreport.page';

describe('SupervisorProductionreportPage', () => {
  let component: SupervisorProductionreportPage;
  let fixture: ComponentFixture<SupervisorProductionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProductionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorProductionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
