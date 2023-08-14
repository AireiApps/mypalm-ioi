import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerWarehousehistoryPage } from './manager-warehousehistory.page';

describe('ManagerWarehousehistoryPage', () => {
  let component: ManagerWarehousehistoryPage;
  let fixture: ComponentFixture<ManagerWarehousehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerWarehousehistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerWarehousehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
