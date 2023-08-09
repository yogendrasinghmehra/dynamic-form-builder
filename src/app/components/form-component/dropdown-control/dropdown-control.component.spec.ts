import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownControlComponent } from './dropdown-control.component';

describe('DropdownControlComponent', () => {
  let component: DropdownControlComponent;
  let fixture: ComponentFixture<DropdownControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownControlComponent]
    });
    fixture = TestBed.createComponent(DropdownControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
