import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectComponent } from './dash-project.component';

describe('DashProjectComponent', () => {
  let component: DashProjectComponent;
  let fixture: ComponentFixture<DashProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashProjectComponent]
    });
    fixture = TestBed.createComponent(DashProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
