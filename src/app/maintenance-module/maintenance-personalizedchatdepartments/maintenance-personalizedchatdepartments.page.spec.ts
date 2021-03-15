import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancePersonalizedchatdepartmentsPage } from './maintenance-personalizedchatdepartments.page';

describe('MaintenancePersonalizedchatdepartmentsPage', () => {
  let component: MaintenancePersonalizedchatdepartmentsPage;
  let fixture: ComponentFixture<MaintenancePersonalizedchatdepartmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePersonalizedchatdepartmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancePersonalizedchatdepartmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
