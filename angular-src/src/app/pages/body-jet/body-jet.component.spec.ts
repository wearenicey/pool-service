import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyJetComponent } from './body-jet.component';

describe('BodyJetComponent', () => {
  let component: BodyJetComponent;
  let fixture: ComponentFixture<BodyJetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyJetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyJetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
