import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveformPage } from './leaveform.page';

describe('LeaveformPage', () => {
  let component: LeaveformPage;
  let fixture: ComponentFixture<LeaveformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
