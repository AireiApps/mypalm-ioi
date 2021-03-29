import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductionhomePage } from './productionhome.page';

describe('ProductionhomePage', () => {
  let component: ProductionhomePage;
  let fixture: ComponentFixture<ProductionhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
