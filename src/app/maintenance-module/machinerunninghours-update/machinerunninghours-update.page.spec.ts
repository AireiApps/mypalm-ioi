import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachinerunninghoursUpdatePage } from './machinerunninghours-update.page';

describe('MachinerunninghoursUpdatePage', () => {
  let component: MachinerunninghoursUpdatePage;
  let fixture: ComponentFixture<MachinerunninghoursUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerunninghoursUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinerunninghoursUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
