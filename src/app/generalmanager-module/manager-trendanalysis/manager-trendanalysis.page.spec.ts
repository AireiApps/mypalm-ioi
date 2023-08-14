import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerTrendanalysisPage } from './manager-trendanalysis.page';

describe('ManagerTrendanalysisPage', () => {
  let component: ManagerTrendanalysisPage;
  let fixture: ComponentFixture<ManagerTrendanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTrendanalysisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerTrendanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
