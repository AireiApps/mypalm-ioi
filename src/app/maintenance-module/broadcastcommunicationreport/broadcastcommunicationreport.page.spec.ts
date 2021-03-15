import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroadcastcommunicationreportPage } from './broadcastcommunicationreport.page';

describe('BroadcastcommunicationreportPage', () => {
  let component: BroadcastcommunicationreportPage;
  let fixture: ComponentFixture<BroadcastcommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastcommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroadcastcommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
