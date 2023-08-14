import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreventivemaintenanceDetailPage } from './preventivemaintenance-detail.page';

describe('PreventivemaintenanceDetailPage', () => {
  let component: PreventivemaintenanceDetailPage;
  let fixture: ComponentFixture<PreventivemaintenanceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivemaintenanceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreventivemaintenanceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
