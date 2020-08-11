import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appWizardReverseStep]',
})
export class WizardReverseStepDirective {
  constructor(private templateRef: TemplateRef<any>) {}

  get template(): TemplateRef<any> {
    return this.templateRef;
  }
}
