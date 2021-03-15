import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorBroadcastchatPage } from './supervisor-broadcastchat.page';

describe('SupervisorBroadcastchatPage', () => {
  let component: SupervisorBroadcastchatPage;
  let fixture: ComponentFixture<SupervisorBroadcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorBroadcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorBroadcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
