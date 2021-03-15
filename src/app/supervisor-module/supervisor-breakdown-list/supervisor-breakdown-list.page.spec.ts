import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorBreakdownListPage } from './supervisor-breakdown-list.page';

describe('SupervisorBreakdownListPage', () => {
  let component: SupervisorBreakdownListPage;
  let fixture: ComponentFixture<SupervisorBreakdownListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorBreakdownListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorBreakdownListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
