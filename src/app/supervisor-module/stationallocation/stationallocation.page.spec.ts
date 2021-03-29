import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationallocationPage } from './stationallocation.page';

describe('StationallocationPage', () => {
  let component: StationallocationPage;
  let fixture: ComponentFixture<StationallocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationallocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationallocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
