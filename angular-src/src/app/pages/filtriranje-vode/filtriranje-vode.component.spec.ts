import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriranjeVodeComponent } from './filtriranje-vode.component';

describe('FiltriranjeVodeComponent', () => {
  let component: FiltriranjeVodeComponent;
  let fixture: ComponentFixture<FiltriranjeVodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltriranjeVodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltriranjeVodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
