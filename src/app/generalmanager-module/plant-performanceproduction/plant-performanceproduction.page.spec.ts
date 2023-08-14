import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantPerformanceproductionPage } from './plant-performanceproduction.page';

describe('PlantPerformanceproductionPage', () => {
  let component: PlantPerformanceproductionPage;
  let fixture: ComponentFixture<PlantPerformanceproductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPerformanceproductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantPerformanceproductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
