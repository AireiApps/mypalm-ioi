import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeDustcollectorcheckPage } from './code-dustcollectorcheck.page';

describe('CodeDustcollectorcheckPage', () => {
  let component: CodeDustcollectorcheckPage;
  let fixture: ComponentFixture<CodeDustcollectorcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDustcollectorcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeDustcollectorcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
