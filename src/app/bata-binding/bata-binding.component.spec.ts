import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BataBindingComponent } from './bata-binding.component';

describe('BataBindingComponent', () => {
  let component: BataBindingComponent;
  let fixture: ComponentFixture<BataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
