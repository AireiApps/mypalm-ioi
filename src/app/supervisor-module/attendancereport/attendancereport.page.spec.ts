import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttendancereportPage } from './attendancereport.page';

describe('AttendancereportPage', () => {
  let component: AttendancereportPage;
  let fixture: ComponentFixture<AttendancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttendancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
