import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagnetictrapreportPage } from './magnetictrapreport.page';

describe('MagnetictrapreportPage', () => {
  let component: MagnetictrapreportPage;
  let fixture: ComponentFixture<MagnetictrapreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnetictrapreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagnetictrapreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
