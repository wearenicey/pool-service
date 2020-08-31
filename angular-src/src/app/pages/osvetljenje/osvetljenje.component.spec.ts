import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsvetljenjeComponent } from './osvetljenje.component';

describe('OsvetljenjeComponent', () => {
  let component: OsvetljenjeComponent;
  let fixture: ComponentFixture<OsvetljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsvetljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsvetljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
