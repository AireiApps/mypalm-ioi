import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DustcollectormonitoringchecklistPage } from './dustcollectormonitoringchecklist.page';

describe('DustcollectormonitoringchecklistPage', () => {
  let component: DustcollectormonitoringchecklistPage;
  let fixture: ComponentFixture<DustcollectormonitoringchecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustcollectormonitoringchecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DustcollectormonitoringchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
