import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZoomimagePage } from './zoomimage.page';

describe('ZoomimagePage', () => {
  let component: ZoomimagePage;
  let fixture: ComponentFixture<ZoomimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomimagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
