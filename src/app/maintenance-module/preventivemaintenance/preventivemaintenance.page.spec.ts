import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreventivemaintenancePage } from './preventivemaintenance.page';

describe('PreventivemaintenancePage', () => {
  let component: PreventivemaintenancePage;
  let fixture: ComponentFixture<PreventivemaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivemaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreventivemaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
