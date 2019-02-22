import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceComponent } from './html-reference.component';

describe('HtmlReferenceComponent', () => {
  let component: HtmlReferenceComponent;
  let fixture: ComponentFixture<HtmlReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
