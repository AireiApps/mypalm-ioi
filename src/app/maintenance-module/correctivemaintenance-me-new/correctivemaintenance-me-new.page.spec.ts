import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceMeNewPage } from './correctivemaintenance-me-new.page';

describe('CorrectivemaintenanceMeNewPage', () => {
  let component: CorrectivemaintenanceMeNewPage;
  let fixture: ComponentFixture<CorrectivemaintenanceMeNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceMeNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceMeNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
