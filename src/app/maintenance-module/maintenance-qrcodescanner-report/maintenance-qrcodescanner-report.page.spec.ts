import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceQrcodescannerReportPage } from './maintenance-qrcodescanner-report.page';

describe('MaintenanceQrcodescannerReportPage', () => {
  let component: MaintenanceQrcodescannerReportPage;
  let fixture: ComponentFixture<MaintenanceQrcodescannerReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceQrcodescannerReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceQrcodescannerReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
