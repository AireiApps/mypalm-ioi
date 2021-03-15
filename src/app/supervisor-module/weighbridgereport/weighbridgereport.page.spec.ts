import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeighbridgereportPage } from './weighbridgereport.page';

describe('WeighbridgereportPage', () => {
  let component: WeighbridgereportPage;
  let fixture: ComponentFixture<WeighbridgereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighbridgereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeighbridgereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
