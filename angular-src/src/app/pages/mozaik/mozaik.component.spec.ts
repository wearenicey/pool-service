import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozaikComponent } from './mozaik.component';

describe('MozaikComponent', () => {
  let component: MozaikComponent;
  let fixture: ComponentFixture<MozaikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozaikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
