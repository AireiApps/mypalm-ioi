import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestNotassignedPage } from './correctivemaintenance-request-notassigned.page';

describe('CorrectivemaintenanceRequestNotassignedPage', () => {
  let component: CorrectivemaintenanceRequestNotassignedPage;
  let fixture: ComponentFixture<CorrectivemaintenanceRequestNotassignedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceRequestNotassignedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceRequestNotassignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
