import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  TemplateRef,
  AfterContentInit,
} from '@angular/core';
import { WizardReverseStepDirective } from '../directives/wizard-reverse-step.directive';

@Component({
  selector: 'app-wizard-reverse',
  templateUrl: './wizard-reverse.component.html',
  styleUrls: ['./wizard-reverse.component.scss'],
})
export class WizardReverseComponent {
  activeStep = 0;
  @ContentChildren(WizardReverseStepDirective) steps: QueryList<
    WizardReverseStepDirective
  > = new QueryList();

  get template(): TemplateRef<any> {
    return this.steps.toArray()[this.activeStep]?.template;
  }

  get isLast(): boolean {
    return this.activeStep === this.steps.length - 1;
  }

  get isFirst(): boolean {
    return this.activeStep === 0;
  }

  isActive(step: number): boolean {
    return step === this.activeStep;
  }

  back(): void {
    if (!this.isFirst) {
      this.activeStep--;
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.activeStep++;
    }
  }
}
