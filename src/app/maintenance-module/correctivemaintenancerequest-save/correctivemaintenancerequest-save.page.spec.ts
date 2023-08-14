import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancerequestSavePage } from './correctivemaintenancerequest-save.page';

describe('CorrectivemaintenancerequestSavePage', () => {
  let component: CorrectivemaintenancerequestSavePage;
  let fixture: ComponentFixture<CorrectivemaintenancerequestSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenancerequestSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenancerequestSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
