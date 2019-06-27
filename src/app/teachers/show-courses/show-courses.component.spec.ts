/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowCoursesComponent } from './show-courses.component';

describe('ShowCoursesComponent', () => {
  let component: ShowCoursesComponent;
  let fixture: ComponentFixture<ShowCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
