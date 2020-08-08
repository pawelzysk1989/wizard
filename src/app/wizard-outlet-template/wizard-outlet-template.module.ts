import { WizardOutletComponent } from './components/wizard-outlet/wizard-outlet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [WizardOutletComponent],
  exports: [WizardOutletComponent],
})
export class WizardOutletTemplateModule {}
