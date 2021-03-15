import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisororderrequestListPage } from './supervisororderrequest-list.page';

describe('SupervisororderrequestListPage', () => {
  let component: SupervisororderrequestListPage;
  let fixture: ComponentFixture<SupervisororderrequestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisororderrequestListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisororderrequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
