import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCdkComponent } from './wizard-cdk.component';

describe('WizardCdkComponent', () => {
  let component: WizardCdkComponent;
  let fixture: ComponentFixture<WizardCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
