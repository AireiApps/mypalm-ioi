import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorMachinelubricationPage } from './supervisor-machinelubrication.page';

describe('SupervisorMachinelubricationPage', () => {
  let component: SupervisorMachinelubricationPage;
  let fixture: ComponentFixture<SupervisorMachinelubricationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorMachinelubricationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorMachinelubricationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
