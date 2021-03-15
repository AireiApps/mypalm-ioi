import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakdownNewPage } from './breakdown-new.page';

describe('BreakdownNewPage', () => {
  let component: BreakdownNewPage;
  let fixture: ComponentFixture<BreakdownNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakdownNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
