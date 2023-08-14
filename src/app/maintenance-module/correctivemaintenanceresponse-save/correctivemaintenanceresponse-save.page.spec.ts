import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceresponseSavePage } from './correctivemaintenanceresponse-save.page';

describe('CorrectivemaintenanceresponseSavePage', () => {
  let component: CorrectivemaintenanceresponseSavePage;
  let fixture: ComponentFixture<CorrectivemaintenanceresponseSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceresponseSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceresponseSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
