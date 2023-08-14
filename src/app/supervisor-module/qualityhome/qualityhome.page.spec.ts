import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityhomePage } from './qualityhome.page';

describe('QualityhomePage', () => {
  let component: QualityhomePage;
  let fixture: ComponentFixture<QualityhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
