import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeFtlPressmachinemaintenancereportPage } from './code-ftl-pressmachinemaintenancereport.page';

describe('CodeFtlPressmachinemaintenancereportPage', () => {
  let component: CodeFtlPressmachinemaintenancereportPage;
  let fixture: ComponentFixture<CodeFtlPressmachinemaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFtlPressmachinemaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeFtlPressmachinemaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
