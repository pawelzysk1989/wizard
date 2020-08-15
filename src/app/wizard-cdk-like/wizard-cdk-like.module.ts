import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardCdkLikeComponent } from './components/wizard-cdk-like/wizard-cdk-like.component';
import { StepCdkLikeComponent } from './components/step-cdk-like/step-cdk-like.component';
import { CdkLikeStepForwardDirective } from './directives/cdk-like-step-forward.directive';
import { CdkLikeStepPreviousDirective } from './directives/cdk-like-step-previous.directive';

@NgModule({
  declarations: [
    WizardCdkLikeComponent,
    StepCdkLikeComponent,
    CdkLikeStepForwardDirective,
    CdkLikeStepPreviousDirective,
  ],
  exports: [
    WizardCdkLikeComponent,
    StepCdkLikeComponent,
    CdkLikeStepForwardDirective,
    CdkLikeStepPreviousDirective,
  ],
  imports: [CommonModule],
})
export class WizardCdkLikeModule {}
