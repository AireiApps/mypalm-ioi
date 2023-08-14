import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewDraftPage } from './correctivemaintenance-new-draft.page';

describe('CorrectivemaintenanceNewDraftPage', () => {
  let component: CorrectivemaintenanceNewDraftPage;
  let fixture: ComponentFixture<CorrectivemaintenanceNewDraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceNewDraftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceNewDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
