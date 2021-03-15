import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceBraodcastchatPage } from './maintenance-braodcastchat.page';

describe('MaintenanceBraodcastchatPage', () => {
  let component: MaintenanceBraodcastchatPage;
  let fixture: ComponentFixture<MaintenanceBraodcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceBraodcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceBraodcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
