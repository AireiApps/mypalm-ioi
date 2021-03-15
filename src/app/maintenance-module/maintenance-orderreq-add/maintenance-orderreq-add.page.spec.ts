import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqAddPage } from './maintenance-orderreq-add.page';

describe('MaintenanceOrderreqAddPage', () => {
  let component: MaintenanceOrderreqAddPage;
  let fixture: ComponentFixture<MaintenanceOrderreqAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceOrderreqAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceOrderreqAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
