import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarDarkComponent} from './navbar-dark.component';

describe('NavbarDarkComponent', () => {
  let component: NavbarDarkComponent;
  let fixture: ComponentFixture<NavbarDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDarkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
