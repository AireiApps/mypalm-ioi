import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobbyengineerPage } from './jobbyengineer.page';

describe('JobbyengineerPage', () => {
  let component: JobbyengineerPage;
  let fixture: ComponentFixture<JobbyengineerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobbyengineerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobbyengineerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
