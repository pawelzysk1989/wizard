import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCdkLikeComponent } from './wizard-cdk-like.component';

describe('WizardCdkLikeComponent', () => {
  let component: WizardCdkLikeComponent;
  let fixture: ComponentFixture<WizardCdkLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCdkLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCdkLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
