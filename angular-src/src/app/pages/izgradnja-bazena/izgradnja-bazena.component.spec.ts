import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzgradnjaBazenaComponent } from './izgradnja-bazena.component';

describe('IzgradnjaBazenaComponent', () => {
  let component: IzgradnjaBazenaComponent;
  let fixture: ComponentFixture<IzgradnjaBazenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzgradnjaBazenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzgradnjaBazenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
