import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakdownDetailPage } from './breakdown-detail.page';

describe('BreakdownDetailPage', () => {
  let component: BreakdownDetailPage;
  let fixture: ComponentFixture<BreakdownDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakdownDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
