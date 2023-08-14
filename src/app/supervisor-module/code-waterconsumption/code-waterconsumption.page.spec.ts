import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeWaterconsumptionPage } from './code-waterconsumption.page';

describe('CodeWaterconsumptionPage', () => {
  let component: CodeWaterconsumptionPage;
  let fixture: ComponentFixture<CodeWaterconsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeWaterconsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeWaterconsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
