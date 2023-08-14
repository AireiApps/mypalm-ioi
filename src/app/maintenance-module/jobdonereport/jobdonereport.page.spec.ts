import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobdonereportPage } from './jobdonereport.page';

describe('JobdonereportPage', () => {
  let component: JobdonereportPage;
  let fixture: ComponentFixture<JobdonereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdonereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobdonereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
