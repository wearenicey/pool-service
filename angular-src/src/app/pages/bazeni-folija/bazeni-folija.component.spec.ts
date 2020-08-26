import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazeniFolijaComponent } from './bazeni-folija.component';

describe('BazeniFolijaComponent', () => {
  let component: BazeniFolijaComponent;
  let fixture: ComponentFixture<BazeniFolijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazeniFolijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazeniFolijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
