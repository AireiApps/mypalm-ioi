import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqDetailPage } from './maintenance-orderreq-detail.page';

describe('MaintenanceOrderreqDetailPage', () => {
  let component: MaintenanceOrderreqDetailPage;
  let fixture: ComponentFixture<MaintenanceOrderreqDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceOrderreqDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceOrderreqDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
