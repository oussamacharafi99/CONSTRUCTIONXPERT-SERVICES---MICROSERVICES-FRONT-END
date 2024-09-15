import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResourceComponent } from './dash-resource.component';

describe('DashResourceComponent', () => {
  let component: DashResourceComponent;
  let fixture: ComponentFixture<DashResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashResourceComponent]
    });
    fixture = TestBed.createComponent(DashResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
