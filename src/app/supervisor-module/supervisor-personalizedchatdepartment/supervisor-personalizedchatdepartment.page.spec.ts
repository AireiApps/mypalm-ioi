import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorPersonalizedchatdepartmentPage } from './supervisor-personalizedchatdepartment.page';

describe('SupervisorPersonalizedchatdepartmentPage', () => {
  let component: SupervisorPersonalizedchatdepartmentPage;
  let fixture: ComponentFixture<SupervisorPersonalizedchatdepartmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorPersonalizedchatdepartmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorPersonalizedchatdepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
