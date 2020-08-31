import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepeniceComponent } from './stepenice.component';

describe('StepeniceComponent', () => {
  let component: StepeniceComponent;
  let fixture: ComponentFixture<StepeniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepeniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepeniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
