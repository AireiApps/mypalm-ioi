import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeRunninghourscheckPage } from './code-runninghourscheck.page';

describe('CodeRunninghourscheckPage', () => {
  let component: CodeRunninghourscheckPage;
  let fixture: ComponentFixture<CodeRunninghourscheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeRunninghourscheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeRunninghourscheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
