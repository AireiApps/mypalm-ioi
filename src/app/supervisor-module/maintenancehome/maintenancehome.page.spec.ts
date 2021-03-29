import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancehomePage } from './maintenancehome.page';

describe('MaintenancehomePage', () => {
  let component: MaintenancehomePage;
  let fixture: ComponentFixture<MaintenancehomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancehomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancehomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
