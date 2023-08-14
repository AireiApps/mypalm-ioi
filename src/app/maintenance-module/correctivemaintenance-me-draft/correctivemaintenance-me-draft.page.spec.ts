import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceMeDraftPage } from './correctivemaintenance-me-draft.page';

describe('CorrectivemaintenanceMeDraftPage', () => {
  let component: CorrectivemaintenanceMeDraftPage;
  let fixture: ComponentFixture<CorrectivemaintenanceMeDraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceMeDraftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceMeDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
