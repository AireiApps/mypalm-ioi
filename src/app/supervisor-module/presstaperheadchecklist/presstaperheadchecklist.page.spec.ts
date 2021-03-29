import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresstaperheadchecklistPage } from './presstaperheadchecklist.page';

describe('PresstaperheadchecklistPage', () => {
  let component: PresstaperheadchecklistPage;
  let fixture: ComponentFixture<PresstaperheadchecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresstaperheadchecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresstaperheadchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
