import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulemaintenancePage } from './schedulemaintenance.page';

describe('SchedulemaintenancePage', () => {
  let component: SchedulemaintenancePage;
  let fixture: ComponentFixture<SchedulemaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulemaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulemaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
