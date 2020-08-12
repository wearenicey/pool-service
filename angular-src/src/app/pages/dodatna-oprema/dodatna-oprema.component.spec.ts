import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodatnaOpremaComponent } from './dodatna-oprema.component';

describe('DodatnaOpremaComponent', () => {
  let component: DodatnaOpremaComponent;
  let fixture: ComponentFixture<DodatnaOpremaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodatnaOpremaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatnaOpremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
