import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualitycheckPage } from './qualitycheck.page';

describe('QualitycheckPage', () => {
  let component: QualitycheckPage;
  let fixture: ComponentFixture<QualitycheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitycheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualitycheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
