import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SorhistoryPage } from './sorhistory.page';

describe('SorhistoryPage', () => {
  let component: SorhistoryPage;
  let fixture: ComponentFixture<SorhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SorhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
