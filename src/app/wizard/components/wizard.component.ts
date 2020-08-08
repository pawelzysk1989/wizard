import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { WizardStepDirective } from '../directives/wizard-step.directive';
import { WizardStep } from '../wizard-step';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements AfterContentInit {
  active = 0;
  @ContentChildren(WizardStepDirective, { read: WizardStep })
  steps: QueryList<WizardStep> = new QueryList();

  ngAfterContentInit(): void {
    this.showStep();
  }

  back(): void {
    if (this.active > 0) {
      this.active--;
      this.showStep();
    }
  }

  forward(): void {
    if (this.active < this.steps.length - 1) {
      this.active++;
      this.showStep();
    }
  }

  showStep(): void {
    this.steps.forEach((stepComponent, index) => {
      stepComponent.show = index === this.active;
    });
  }
}
