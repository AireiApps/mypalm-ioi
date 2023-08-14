import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceHomePage } from './correctivemaintenance-home.page';

describe('CorrectivemaintenanceHomePage', () => {
  let component: CorrectivemaintenanceHomePage;
  let fixture: ComponentFixture<CorrectivemaintenanceHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
