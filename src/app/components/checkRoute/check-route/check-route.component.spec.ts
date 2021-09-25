import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRouteComponent } from './check-route.component';

describe('CheckRouteComponent', () => {
  let component: CheckRouteComponent;
  let fixture: ComponentFixture<CheckRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
