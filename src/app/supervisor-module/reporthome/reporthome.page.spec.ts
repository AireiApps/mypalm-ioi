import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporthomePage } from './reporthome.page';

describe('ReporthomePage', () => {
  let component: ReporthomePage;
  let fixture: ComponentFixture<ReporthomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporthomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporthomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
