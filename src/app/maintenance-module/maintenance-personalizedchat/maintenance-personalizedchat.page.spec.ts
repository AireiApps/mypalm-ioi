import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancePersonalizedchatPage } from './maintenance-personalizedchat.page';

describe('MaintenancePersonalizedchatPage', () => {
  let component: MaintenancePersonalizedchatPage;
  let fixture: ComponentFixture<MaintenancePersonalizedchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePersonalizedchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancePersonalizedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
