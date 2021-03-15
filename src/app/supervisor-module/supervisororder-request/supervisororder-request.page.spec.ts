import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisororderRequestPage } from './supervisororder-request.page';

describe('SupervisororderRequestPage', () => {
  let component: SupervisororderRequestPage;
  let fixture: ComponentFixture<SupervisororderRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisororderRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisororderRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
