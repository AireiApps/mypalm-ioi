import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceAddnewjobPage } from './maintenance-addnewjob.page';

describe('MaintenanceAddnewjobPage', () => {
  let component: MaintenanceAddnewjobPage;
  let fixture: ComponentFixture<MaintenanceAddnewjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceAddnewjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceAddnewjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
