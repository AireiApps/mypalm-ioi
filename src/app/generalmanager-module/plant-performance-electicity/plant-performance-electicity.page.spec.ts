import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantPerformanceElecticityPage } from './plant-performance-electicity.page';

describe('PlantPerformanceElecticityPage', () => {
  let component: PlantPerformanceElecticityPage;
  let fixture: ComponentFixture<PlantPerformanceElecticityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPerformanceElecticityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantPerformanceElecticityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
