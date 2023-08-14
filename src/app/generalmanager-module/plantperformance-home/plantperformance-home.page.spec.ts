import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantperformanceHomePage } from './plantperformance-home.page';

describe('PlantperformanceHomePage', () => {
  let component: PlantperformanceHomePage;
  let fixture: ComponentFixture<PlantperformanceHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantperformanceHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantperformanceHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
