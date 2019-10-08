import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureMediaComponent } from './capture-media.component';

describe('CaptureMediaComponent', () => {
  let component: CaptureMediaComponent;
  let fixture: ComponentFixture<CaptureMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
