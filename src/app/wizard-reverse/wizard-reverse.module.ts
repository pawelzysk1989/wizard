import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardReverseComponent } from './components/wizard-reverse.component';
import { WizardReverseStepDirective } from './directives/wizard-reverse-step.directive';
import { WizardNextStepDirective } from './directives/wizard-next-step.directive';
import { WizardPreviousStepDirective } from './directives/wizard-previous-step.directive';

@NgModule({
  declarations: [
    WizardReverseComponent,
    WizardReverseStepDirective,
    WizardNextStepDirective,
    WizardPreviousStepDirective,
  ],
  imports: [CommonModule],
  exports: [
    WizardReverseComponent,
    WizardReverseStepDirective,
    WizardNextStepDirective,
    WizardPreviousStepDirective,
  ],
})
export class WizardReverseModule {}
