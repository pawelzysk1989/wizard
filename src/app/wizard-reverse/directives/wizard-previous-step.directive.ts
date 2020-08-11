import { Directive, HostListener } from '@angular/core';
import { WizardReverseComponent } from '../components/wizard-reverse.component';

@Directive({
  selector: '[appWizardPreviousStep]',
})
export class WizardPreviousStepDirective {
  constructor(private wizardComponent: WizardReverseComponent) {}

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.wizardComponent.back();
  }
}
