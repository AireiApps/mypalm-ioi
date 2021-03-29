import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DustplantreportPage } from './dustplantreport.page';

describe('DustplantreportPage', () => {
  let component: DustplantreportPage;
  let fixture: ComponentFixture<DustplantreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustplantreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DustplantreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
