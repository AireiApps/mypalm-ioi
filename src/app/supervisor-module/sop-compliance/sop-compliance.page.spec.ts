import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SopCompliancePage } from './sop-compliance.page';

describe('SopCompliancePage', () => {
  let component: SopCompliancePage;
  let fixture: ComponentFixture<SopCompliancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopCompliancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SopCompliancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
