import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaSettingsComponent } from './textarea-settings.component';

describe('TextareaSettingsComponent', () => {
  let component: TextareaSettingsComponent;
  let fixture: ComponentFixture<TextareaSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaSettingsComponent]
    });
    fixture = TestBed.createComponent(TextareaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
