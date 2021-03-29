import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachinerySearchPage } from './machinery-search.page';

describe('MachinerySearchPage', () => {
  let component: MachinerySearchPage;
  let fixture: ComponentFixture<MachinerySearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerySearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinerySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
