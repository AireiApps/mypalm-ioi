import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceQrcodescannerPage } from './maintenance-qrcodescanner.page';

describe('MaintenanceQrcodescannerPage', () => {
  let component: MaintenanceQrcodescannerPage;
  let fixture: ComponentFixture<MaintenanceQrcodescannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceQrcodescannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceQrcodescannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
