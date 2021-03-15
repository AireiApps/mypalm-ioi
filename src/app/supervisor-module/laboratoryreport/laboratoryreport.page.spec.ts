import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryreportPage } from './laboratoryreport.page';

describe('LaboratoryreportPage', () => {
  let component: LaboratoryreportPage;
  let fixture: ComponentFixture<LaboratoryreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
