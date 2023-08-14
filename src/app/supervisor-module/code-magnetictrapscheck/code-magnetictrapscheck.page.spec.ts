import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeMagnetictrapscheckPage } from './code-magnetictrapscheck.page';

describe('CodeMagnetictrapscheckPage', () => {
  let component: CodeMagnetictrapscheckPage;
  let fixture: ComponentFixture<CodeMagnetictrapscheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMagnetictrapscheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeMagnetictrapscheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
