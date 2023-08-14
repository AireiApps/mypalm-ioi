import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePressmachinemaintenancereportPage } from './code-pressmachinemaintenancereport.page';

describe('CodePressmachinemaintenancereportPage', () => {
  let component: CodePressmachinemaintenancereportPage;
  let fixture: ComponentFixture<CodePressmachinemaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePressmachinemaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePressmachinemaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
