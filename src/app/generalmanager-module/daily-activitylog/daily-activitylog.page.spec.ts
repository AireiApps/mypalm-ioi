import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyActivitylogPage } from './daily-activitylog.page';

describe('DailyActivitylogPage', () => {
  let component: DailyActivitylogPage;
  let fixture: ComponentFixture<DailyActivitylogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyActivitylogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyActivitylogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
