import { Component, forwardRef } from '@angular/core';

import { WizardStep } from '../wizard/wizard-step';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [
    { provide: WizardStep, useExisting: forwardRef(() => Step1Component) },
  ],
})
export class Step1Component implements WizardStep {
  show = false;
}
