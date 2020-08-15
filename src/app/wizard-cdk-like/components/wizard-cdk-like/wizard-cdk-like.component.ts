import { CkdStepperLike } from './../../ckd-stepper-like';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-cdk-like',
  templateUrl: './wizard-cdk-like.component.html',
  styleUrls: ['./wizard-cdk-like.component.scss'],
  providers: [{ provide: CkdStepperLike, useExisting: WizardCdkLikeComponent }],
})
export class WizardCdkLikeComponent extends CkdStepperLike {}
