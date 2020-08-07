import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WizardStepDirective } from './wizard-step.directive';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    WizardStepDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
