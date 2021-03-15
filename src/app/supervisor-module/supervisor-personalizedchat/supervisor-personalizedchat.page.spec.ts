import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorPersonalizedchatPage } from './supervisor-personalizedchat.page';

describe('SupervisorPersonalizedchatPage', () => {
  let component: SupervisorPersonalizedchatPage;
  let fixture: ComponentFixture<SupervisorPersonalizedchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorPersonalizedchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorPersonalizedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
