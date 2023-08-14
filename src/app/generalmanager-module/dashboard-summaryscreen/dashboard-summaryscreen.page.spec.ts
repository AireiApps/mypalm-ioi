import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardSummaryscreenPage } from './dashboard-summaryscreen.page';

describe('DashboardSummaryscreenPage', () => {
  let component: DashboardSummaryscreenPage;
  let fixture: ComponentFixture<DashboardSummaryscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSummaryscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSummaryscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
