import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePlantsystemmaintenancereportPage } from './code-plantsystemmaintenancereport.page';

describe('CodePlantsystemmaintenancereportPage', () => {
  let component: CodePlantsystemmaintenancereportPage;
  let fixture: ComponentFixture<CodePlantsystemmaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePlantsystemmaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePlantsystemmaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
