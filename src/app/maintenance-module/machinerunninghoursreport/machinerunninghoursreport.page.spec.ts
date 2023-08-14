import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachinerunninghoursreportPage } from './machinerunninghoursreport.page';

describe('MachinerunninghoursreportPage', () => {
  let component: MachinerunninghoursreportPage;
  let fixture: ComponentFixture<MachinerunninghoursreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerunninghoursreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinerunninghoursreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
