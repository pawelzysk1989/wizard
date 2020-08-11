import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardReverseComponent } from './wizard-reverse.component';

describe('WizardReverseComponent', () => {
  let component: WizardReverseComponent;
  let fixture: ComponentFixture<WizardReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
