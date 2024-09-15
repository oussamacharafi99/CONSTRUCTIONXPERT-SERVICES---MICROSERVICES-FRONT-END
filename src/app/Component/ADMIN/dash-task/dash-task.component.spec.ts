import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTaskComponent } from './dash-task.component';

describe('DashTaskComponent', () => {
  let component: DashTaskComponent;
  let fixture: ComponentFixture<DashTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashTaskComponent]
    });
    fixture = TestBed.createComponent(DashTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
