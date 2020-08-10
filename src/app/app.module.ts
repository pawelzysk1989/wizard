import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppComponent } from './app.component';
import { WizardOutletTemplateModule } from './wizard-outlet-template/wizard-outlet-template.module';
import { WizardModule } from './wizard/wizard.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WizardCdkComponent } from './wizard-cdk/wizard-cdk.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    WizardCdkComponent,
  ],
  imports: [
    BrowserModule,
    WizardModule,
    WizardOutletTemplateModule,
    CdkStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
