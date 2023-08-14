import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceDraftPage } from './correctivemaintenance-draft.page';

describe('CorrectivemaintenanceDraftPage', () => {
  let component: CorrectivemaintenanceDraftPage;
  let fixture: ComponentFixture<CorrectivemaintenanceDraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceDraftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
