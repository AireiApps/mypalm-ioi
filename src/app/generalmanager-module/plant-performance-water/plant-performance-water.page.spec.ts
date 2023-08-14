import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantPerformanceWaterPage } from './plant-performance-water.page';

describe('PlantPerformanceWaterPage', () => {
  let component: PlantPerformanceWaterPage;
  let fixture: ComponentFixture<PlantPerformanceWaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPerformanceWaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantPerformanceWaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
