import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagecollectionDustPage } from './imagecollection-dust.page';

describe('ImagecollectionDustPage', () => {
  let component: ImagecollectionDustPage;
  let fixture: ComponentFixture<ImagecollectionDustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecollectionDustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagecollectionDustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
