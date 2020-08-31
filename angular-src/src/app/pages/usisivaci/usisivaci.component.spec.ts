import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsisivaciComponent } from './usisivaci.component';

describe('UsisivaciComponent', () => {
  let component: UsisivaciComponent;
  let fixture: ComponentFixture<UsisivaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsisivaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsisivaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
