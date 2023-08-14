import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceresponsePartsPage } from './correctivemaintenanceresponse-parts.page';

describe('CorrectivemaintenanceresponsePartsPage', () => {
  let component: CorrectivemaintenanceresponsePartsPage;
  let fixture: ComponentFixture<CorrectivemaintenanceresponsePartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenanceresponsePartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenanceresponsePartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
