import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeReportBucketelevatorroutinecheckPage } from './code-report-bucketelevatorroutinecheck.page';

describe('CodeReportBucketelevatorroutinecheckPage', () => {
  let component: CodeReportBucketelevatorroutinecheckPage;
  let fixture: ComponentFixture<CodeReportBucketelevatorroutinecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReportBucketelevatorroutinecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeReportBucketelevatorroutinecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
