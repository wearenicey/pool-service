import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TriKorakaComponent} from './tri-koraka.component';

describe('TriKorakaComponent', () => {
  let component: TriKorakaComponent;
  let fixture: ComponentFixture<TriKorakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriKorakaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriKorakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
