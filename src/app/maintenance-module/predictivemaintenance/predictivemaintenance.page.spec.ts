import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredictivemaintenancePage } from './predictivemaintenance.page';

describe('PredictivemaintenancePage', () => {
  let component: PredictivemaintenancePage;
  let fixture: ComponentFixture<PredictivemaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictivemaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictivemaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
