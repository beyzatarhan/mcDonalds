/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LezzetlerComponent } from './lezzetler.component';

describe('LezzetlerComponent', () => {
  let component: LezzetlerComponent;
  let fixture: ComponentFixture<LezzetlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LezzetlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LezzetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
