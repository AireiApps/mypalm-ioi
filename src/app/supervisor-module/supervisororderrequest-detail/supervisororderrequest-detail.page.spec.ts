import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisororderrequestDetailPage } from './supervisororderrequest-detail.page';

describe('SupervisororderrequestDetailPage', () => {
  let component: SupervisororderrequestDetailPage;
  let fixture: ComponentFixture<SupervisororderrequestDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisororderrequestDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisororderrequestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
