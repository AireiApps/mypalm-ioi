import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestNotassignedSavePage } from './correctivemaintenance-request-notassigned-save.page';

describe('CorrectivemaintenanceRequestNotassignedSavePage', () => {
  let component: CorrectivemaintenanceRequestNotassignedSavePage;
  let fixture: ComponentFixture<CorrectivemaintenanceRequestNotassignedSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceRequestNotassignedSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceRequestNotassignedSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
