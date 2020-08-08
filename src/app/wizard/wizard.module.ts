import { WizardStepDirective } from './directives/wizard-step.directive';
import { WizardComponent } from './components/wizard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [WizardComponent, WizardStepDirective],
  exports: [WizardComponent, WizardStepDirective],
})
export class WizardModule {}
