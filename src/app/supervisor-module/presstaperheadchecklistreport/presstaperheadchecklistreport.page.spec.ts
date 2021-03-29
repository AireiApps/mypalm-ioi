import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresstaperheadchecklistreportPage } from './presstaperheadchecklistreport.page';

describe('PresstaperheadchecklistreportPage', () => {
  let component: PresstaperheadchecklistreportPage;
  let fixture: ComponentFixture<PresstaperheadchecklistreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresstaperheadchecklistreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresstaperheadchecklistreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
