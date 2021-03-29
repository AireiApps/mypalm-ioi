import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PkeindividualspotcheckreportPage } from './pkeindividualspotcheckreport.page';

describe('PkeindividualspotcheckreportPage', () => {
  let component: PkeindividualspotcheckreportPage;
  let fixture: ComponentFixture<PkeindividualspotcheckreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkeindividualspotcheckreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PkeindividualspotcheckreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
