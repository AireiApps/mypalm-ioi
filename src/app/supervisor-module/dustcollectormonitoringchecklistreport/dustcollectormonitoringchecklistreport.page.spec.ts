import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DustcollectormonitoringchecklistreportPage } from './dustcollectormonitoringchecklistreport.page';

describe('DustcollectormonitoringchecklistreportPage', () => {
  let component: DustcollectormonitoringchecklistreportPage;
  let fixture: ComponentFixture<DustcollectormonitoringchecklistreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustcollectormonitoringchecklistreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DustcollectormonitoringchecklistreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
