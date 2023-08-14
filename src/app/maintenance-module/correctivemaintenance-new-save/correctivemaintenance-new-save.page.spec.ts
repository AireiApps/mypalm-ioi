import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewSavePage } from './correctivemaintenance-new-save.page';

describe('CorrectivemaintenanceNewSavePage', () => {
  let component: CorrectivemaintenanceNewSavePage;
  let fixture: ComponentFixture<CorrectivemaintenanceNewSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceNewSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceNewSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
