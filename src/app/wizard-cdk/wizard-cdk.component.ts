import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-wizard-cdk',
  templateUrl: './wizard-cdk.component.html',
  styleUrls: ['./wizard-cdk.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: WizardCdkComponent }],
})
export class WizardCdkComponent extends CdkStepper {}
