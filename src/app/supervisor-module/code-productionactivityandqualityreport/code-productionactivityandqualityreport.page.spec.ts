import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeProductionactivityandqualityreportPage } from './code-productionactivityandqualityreport.page';

describe('CodeProductionactivityandqualityreportPage', () => {
  let component: CodeProductionactivityandqualityreportPage;
  let fixture: ComponentFixture<CodeProductionactivityandqualityreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeProductionactivityandqualityreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeProductionactivityandqualityreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
