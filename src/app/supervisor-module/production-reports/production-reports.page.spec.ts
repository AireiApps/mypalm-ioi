import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductionReportsPage } from './production-reports.page';

describe('ProductionReportsPage', () => {
  let component: ProductionReportsPage;
  let fixture: ComponentFixture<ProductionReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
