/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KampanyalarComponent } from './kampanyalar.component';

describe('KampanyalarComponent', () => {
  let component: KampanyalarComponent;
  let fixture: ComponentFixture<KampanyalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampanyalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampanyalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
