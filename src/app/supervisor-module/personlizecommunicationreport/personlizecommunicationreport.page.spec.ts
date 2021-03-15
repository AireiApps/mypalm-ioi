import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonlizecommunicationreportPage } from './personlizecommunicationreport.page';

describe('PersonlizecommunicationreportPage', () => {
  let component: PersonlizecommunicationreportPage;
  let fixture: ComponentFixture<PersonlizecommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonlizecommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonlizecommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
