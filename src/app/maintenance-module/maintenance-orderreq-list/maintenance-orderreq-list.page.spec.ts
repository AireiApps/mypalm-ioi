import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqListPage } from './maintenance-orderreq-list.page';

describe('MaintenanceOrderreqListPage', () => {
  let component: MaintenanceOrderreqListPage;
  let fixture: ComponentFixture<MaintenanceOrderreqListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceOrderreqListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceOrderreqListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
