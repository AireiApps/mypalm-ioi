import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestPage } from './correctivemaintenance-request.page';

describe('CorrectivemaintenanceRequestPage', () => {
  let component: CorrectivemaintenanceRequestPage;
  let fixture: ComponentFixture<CorrectivemaintenanceRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
