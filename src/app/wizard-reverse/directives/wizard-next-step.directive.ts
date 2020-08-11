import { WizardReverseComponent } from './../components/wizard-reverse.component';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWizardNextStep]',
})
export class WizardNextStepDirective {
  constructor(private wizardComponent: WizardReverseComponent) {}

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.wizardComponent.forward();
  }
}
