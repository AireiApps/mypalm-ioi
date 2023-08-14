import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceResponsePage } from './correctivemaintenance-response.page';

describe('CorrectivemaintenanceResponsePage', () => {
  let component: CorrectivemaintenanceResponsePage;
  let fixture: ComponentFixture<CorrectivemaintenanceResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
