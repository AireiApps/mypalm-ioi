import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationweeklyPage } from './notificationweekly.page';

describe('NotificationweeklyPage', () => {
  let component: NotificationweeklyPage;
  let fixture: ComponentFixture<NotificationweeklyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationweeklyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationweeklyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
