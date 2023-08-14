import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarehousemonthlyreportPage } from './warehousemonthlyreport.page';

describe('WarehousemonthlyreportPage', () => {
  let component: WarehousemonthlyreportPage;
  let fixture: ComponentFixture<WarehousemonthlyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousemonthlyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousemonthlyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
