import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspecifictaskComponent } from './viewspecifictask.component';

describe('ViewspecifictaskComponent', () => {
  let component: ViewspecifictaskComponent;
  let fixture: ComponentFixture<ViewspecifictaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspecifictaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspecifictaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
