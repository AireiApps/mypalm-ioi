import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeTaperheadandamperagecheckPage } from './code-taperheadandamperagecheck.page';

describe('CodeTaperheadandamperagecheckPage', () => {
  let component: CodeTaperheadandamperagecheckPage;
  let fixture: ComponentFixture<CodeTaperheadandamperagecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTaperheadandamperagecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeTaperheadandamperagecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
