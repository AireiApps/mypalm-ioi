import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceJobdonereportPage } from './maintenance-jobdonereport.page';

describe('MaintenanceJobdonereportPage', () => {
  let component: MaintenanceJobdonereportPage;
  let fixture: ComponentFixture<MaintenanceJobdonereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceJobdonereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceJobdonereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
