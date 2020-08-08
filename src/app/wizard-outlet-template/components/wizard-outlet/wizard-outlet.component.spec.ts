/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WizardOutletComponent } from './wizard-outlet.component';

describe('WizardOutletComponent', () => {
  let component: WizardOutletComponent;
  let fixture: ComponentFixture<WizardOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
