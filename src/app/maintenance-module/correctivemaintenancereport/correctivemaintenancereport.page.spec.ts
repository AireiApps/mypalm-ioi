import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancereportPage } from './correctivemaintenancereport.page';

describe('CorrectivemaintenancereportPage', () => {
  let component: CorrectivemaintenancereportPage;
  let fixture: ComponentFixture<CorrectivemaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectivemaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectivemaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
