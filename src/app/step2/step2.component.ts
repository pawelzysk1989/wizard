import { Component } from '@angular/core';
import { WizardStep } from '../wizard/wizard-step';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [{ provide: WizardStep, useExisting: Step2Component }],
})
export class Step2Component implements WizardStep {
  show = false;
}
