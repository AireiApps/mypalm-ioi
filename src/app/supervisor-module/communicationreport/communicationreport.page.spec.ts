import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunicationreportPage } from './communicationreport.page';

describe('CommunicationreportPage', () => {
  let component: CommunicationreportPage;
  let fixture: ComponentFixture<CommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
