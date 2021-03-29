import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NirpkeproductionreportPage } from './nirpkeproductionreport.page';

describe('NirpkeproductionreportPage', () => {
  let component: NirpkeproductionreportPage;
  let fixture: ComponentFixture<NirpkeproductionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NirpkeproductionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NirpkeproductionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
