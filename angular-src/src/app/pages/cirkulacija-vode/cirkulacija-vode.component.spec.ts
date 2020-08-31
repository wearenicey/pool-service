import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirkulacijaVodeComponent } from './cirkulacija-vode.component';

describe('CirkulacijaVodeComponent', () => {
  let component: CirkulacijaVodeComponent;
  let fixture: ComponentFixture<CirkulacijaVodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirkulacijaVodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirkulacijaVodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
