import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeScrewconveyorroutinecheckPage } from './code-screwconveyorroutinecheck.page';

describe('CodeScrewconveyorroutinecheckPage', () => {
  let component: CodeScrewconveyorroutinecheckPage;
  let fixture: ComponentFixture<CodeScrewconveyorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeScrewconveyorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeScrewconveyorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
