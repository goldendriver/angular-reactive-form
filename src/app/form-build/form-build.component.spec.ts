import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildComponent } from './form-build.component';

describe('FormBuildComponent', () => {
  let component: FormBuildComponent;
  let fixture: ComponentFixture<FormBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
