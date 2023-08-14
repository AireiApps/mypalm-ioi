import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityReportsPage } from './quality-reports.page';

describe('QualityReportsPage', () => {
  let component: QualityReportsPage;
  let fixture: ComponentFixture<QualityReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
