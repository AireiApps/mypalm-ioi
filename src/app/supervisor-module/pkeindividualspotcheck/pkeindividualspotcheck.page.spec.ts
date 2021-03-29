import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PkeindividualspotcheckPage } from './pkeindividualspotcheck.page';

describe('PkeindividualspotcheckPage', () => {
  let component: PkeindividualspotcheckPage;
  let fixture: ComponentFixture<PkeindividualspotcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkeindividualspotcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PkeindividualspotcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
