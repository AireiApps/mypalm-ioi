import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancePeViewPage } from './correctivemaintenance-pe-view.page';

describe('CorrectivemaintenancePeViewPage', () => {
  let component: CorrectivemaintenancePeViewPage;
  let fixture: ComponentFixture<CorrectivemaintenancePeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenancePeViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenancePeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
