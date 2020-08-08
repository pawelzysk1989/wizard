import { WizardModule } from './wizard/wizard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@NgModule({
  declarations: [AppComponent, Step1Component, Step2Component, Step3Component],
  imports: [BrowserModule, WizardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
