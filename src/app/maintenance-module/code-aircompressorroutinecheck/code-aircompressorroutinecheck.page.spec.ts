import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeAircompressorroutinecheckPage } from './code-aircompressorroutinecheck.page';

describe('CodeAircompressorroutinecheckPage', () => {
  let component: CodeAircompressorroutinecheckPage;
  let fixture: ComponentFixture<CodeAircompressorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAircompressorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeAircompressorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
