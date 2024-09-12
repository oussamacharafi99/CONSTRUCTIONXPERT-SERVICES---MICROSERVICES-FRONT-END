import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResourceComponent } from './show-resource.component';

describe('ShowResourceComponent', () => {
  let component: ShowResourceComponent;
  let fixture: ComponentFixture<ShowResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowResourceComponent]
    });
    fixture = TestBed.createComponent(ShowResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
