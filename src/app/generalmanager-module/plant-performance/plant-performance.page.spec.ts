import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantPerformancePage } from './plant-performance.page';

describe('PlantPerformancePage', () => {
  let component: PlantPerformancePage;
  let fixture: ComponentFixture<PlantPerformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPerformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantPerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
