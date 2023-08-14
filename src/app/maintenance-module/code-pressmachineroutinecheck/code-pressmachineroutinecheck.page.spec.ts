import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePressmachineroutinecheckPage } from './code-pressmachineroutinecheck.page';

describe('CodePressmachineroutinecheckPage', () => {
  let component: CodePressmachineroutinecheckPage;
  let fixture: ComponentFixture<CodePressmachineroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePressmachineroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePressmachineroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
