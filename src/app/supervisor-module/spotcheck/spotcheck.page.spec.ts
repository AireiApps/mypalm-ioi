import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotcheckPage } from './spotcheck.page';

describe('SpotcheckPage', () => {
  let component: SpotcheckPage;
  let fixture: ComponentFixture<SpotcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
