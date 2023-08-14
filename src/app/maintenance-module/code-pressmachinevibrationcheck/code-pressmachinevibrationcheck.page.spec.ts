import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePressmachinevibrationcheckPage } from './code-pressmachinevibrationcheck.page';

describe('CodePressmachinevibrationcheckPage', () => {
  let component: CodePressmachinevibrationcheckPage;
  let fixture: ComponentFixture<CodePressmachinevibrationcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePressmachinevibrationcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePressmachinevibrationcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
