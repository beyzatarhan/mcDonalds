/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SirComponent } from './sir.component';

describe('SirComponent', () => {
  let component: SirComponent;
  let fixture: ComponentFixture<SirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
