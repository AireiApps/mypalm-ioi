import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceMachinelubricationPage } from './maintenance-machinelubrication.page';

describe('MaintenanceMachinelubricationPage', () => {
  let component: MaintenanceMachinelubricationPage;
  let fixture: ComponentFixture<MaintenanceMachinelubricationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMachinelubricationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceMachinelubricationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
