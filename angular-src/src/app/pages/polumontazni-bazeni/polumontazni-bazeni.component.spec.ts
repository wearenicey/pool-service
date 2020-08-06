import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolumontazniBazeniComponent } from './polumontazni-bazeni.component';

describe('PolumontazniBazeniComponent', () => {
  let component: PolumontazniBazeniComponent;
  let fixture: ComponentFixture<PolumontazniBazeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolumontazniBazeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolumontazniBazeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
