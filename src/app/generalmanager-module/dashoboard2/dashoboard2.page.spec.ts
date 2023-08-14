import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dashoboard2Page } from './dashoboard2.page';

describe('Dashoboard2Page', () => {
  let component: Dashoboard2Page;
  let fixture: ComponentFixture<Dashoboard2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashoboard2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashoboard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
