import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonControlComponent } from './button-control.component';

describe('ButtonControlComponent', () => {
  let component: ButtonControlComponent;
  let fixture: ComponentFixture<ButtonControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonControlComponent]
    });
    fixture = TestBed.createComponent(ButtonControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
