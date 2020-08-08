import { Component, forwardRef } from '@angular/core';
import { WizardStep } from '../wizard/wizard-step';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  providers: [
    { provide: WizardStep, useExisting: forwardRef(() => Step3Component) },
  ],
})
export class Step3Component implements WizardStep {
  show = false;
}
