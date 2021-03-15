import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NirpkeproductioncalibrationPage } from './nirpkeproductioncalibration.page';

describe('NirpkeproductioncalibrationPage', () => {
  let component: NirpkeproductioncalibrationPage;
  let fixture: ComponentFixture<NirpkeproductioncalibrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NirpkeproductioncalibrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NirpkeproductioncalibrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
