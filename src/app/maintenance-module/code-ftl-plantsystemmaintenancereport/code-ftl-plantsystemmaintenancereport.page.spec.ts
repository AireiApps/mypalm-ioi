import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeFtlPlantsystemmaintenancereportPage } from './code-ftl-plantsystemmaintenancereport.page';

describe('CodeFtlPlantsystemmaintenancereportPage', () => {
  let component: CodeFtlPlantsystemmaintenancereportPage;
  let fixture: ComponentFixture<CodeFtlPlantsystemmaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFtlPlantsystemmaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeFtlPlantsystemmaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
