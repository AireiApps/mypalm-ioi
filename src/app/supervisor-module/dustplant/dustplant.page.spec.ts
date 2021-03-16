import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DustplantPage } from './dustplant.page';

describe('DustplantPage', () => {
  let component: DustplantPage;
  let fixture: ComponentFixture<DustplantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustplantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DustplantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
