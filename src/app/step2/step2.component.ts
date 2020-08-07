import { Component, OnInit, forwardRef } from '@angular/core';
import { WizardStep } from '../wizard/wizard-step';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [
    { provide: WizardStep, useExisting: forwardRef(() => Step2Component) },
  ],
})
export class Step2Component implements WizardStep {
  show = false;
}
