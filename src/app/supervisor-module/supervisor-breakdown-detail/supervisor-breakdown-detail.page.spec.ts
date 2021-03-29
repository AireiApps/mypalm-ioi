import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorBreakdownDetailPage } from './supervisor-breakdown-detail.page';

describe('SupervisorBreakdownDetailPage', () => {
  let component: SupervisorBreakdownDetailPage;
  let fixture: ComponentFixture<SupervisorBreakdownDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorBreakdownDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorBreakdownDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
