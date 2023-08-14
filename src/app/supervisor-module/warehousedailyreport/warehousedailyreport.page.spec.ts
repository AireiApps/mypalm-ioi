import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarehousedailyreportPage } from './warehousedailyreport.page';

describe('WarehousedailyreportPage', () => {
  let component: WarehousedailyreportPage;
  let fixture: ComponentFixture<WarehousedailyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousedailyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousedailyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
