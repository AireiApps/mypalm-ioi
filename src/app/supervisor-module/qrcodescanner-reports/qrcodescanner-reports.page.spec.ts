import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcodescannerReportsPage } from './qrcodescanner-reports.page';

describe('QrcodescannerReportsPage', () => {
  let component: QrcodescannerReportsPage;
  let fixture: ComponentFixture<QrcodescannerReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodescannerReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodescannerReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
