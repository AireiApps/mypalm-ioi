import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeBucketelevatorroutinecheckPage } from './code-bucketelevatorroutinecheck.page';

describe('CodeBucketelevatorroutinecheckPage', () => {
  let component: CodeBucketelevatorroutinecheckPage;
  let fixture: ComponentFixture<CodeBucketelevatorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBucketelevatorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeBucketelevatorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
