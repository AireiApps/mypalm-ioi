import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePressmachinelubricationreportPage } from './code-pressmachinelubricationreport.page';

describe('CodePressmachinelubricationreportPage', () => {
  let component: CodePressmachinelubricationreportPage;
  let fixture: ComponentFixture<CodePressmachinelubricationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePressmachinelubricationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePressmachinelubricationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
