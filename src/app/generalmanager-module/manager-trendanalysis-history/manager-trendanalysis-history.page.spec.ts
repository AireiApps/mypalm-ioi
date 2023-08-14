import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerTrendanalysisHistoryPage } from './manager-trendanalysis-history.page';

describe('ManagerTrendanalysisHistoryPage', () => {
  let component: ManagerTrendanalysisHistoryPage;
  let fixture: ComponentFixture<ManagerTrendanalysisHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTrendanalysisHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerTrendanalysisHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
