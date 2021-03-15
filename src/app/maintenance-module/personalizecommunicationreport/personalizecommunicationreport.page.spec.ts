import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalizecommunicationreportPage } from './personalizecommunicationreport.page';

describe('PersonalizecommunicationreportPage', () => {
  let component: PersonalizecommunicationreportPage;
  let fixture: ComponentFixture<PersonalizecommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizecommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizecommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
