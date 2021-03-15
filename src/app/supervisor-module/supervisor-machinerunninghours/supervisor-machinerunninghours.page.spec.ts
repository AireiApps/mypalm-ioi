import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorMachinerunninghoursPage } from './supervisor-machinerunninghours.page';

describe('SupervisorMachinerunninghoursPage', () => {
  let component: SupervisorMachinerunninghoursPage;
  let fixture: ComponentFixture<SupervisorMachinerunninghoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorMachinerunninghoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorMachinerunninghoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
