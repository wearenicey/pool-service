import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonskiBazeniComponent } from './betonski-bazeni.component';

describe('BetonskiBazeniComponent', () => {
  let component: BetonskiBazeniComponent;
  let fixture: ComponentFixture<BetonskiBazeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetonskiBazeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetonskiBazeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
