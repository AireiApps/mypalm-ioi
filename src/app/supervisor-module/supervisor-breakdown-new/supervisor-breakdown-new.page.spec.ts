import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorBreakdownNewPage } from './supervisor-breakdown-new.page';

describe('SupervisorBreakdownNewPage', () => {
  let component: SupervisorBreakdownNewPage;
  let fixture: ComponentFixture<SupervisorBreakdownNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorBreakdownNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorBreakdownNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
