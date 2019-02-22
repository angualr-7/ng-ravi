import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCompComponent } from './right-comp.component';

describe('RightCompComponent', () => {
  let component: RightCompComponent;
  let fixture: ComponentFixture<RightCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
