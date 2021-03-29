import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagnetictrapPage } from './magnetictrap.page';

describe('MagnetictrapPage', () => {
  let component: MagnetictrapPage;
  let fixture: ComponentFixture<MagnetictrapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnetictrapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagnetictrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
