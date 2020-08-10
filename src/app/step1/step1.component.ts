import { Component } from "@angular/core";

import { WizardStep } from "../wizard/wizard-step";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.css"],
  providers: [{ provide: WizardStep, useExisting: Step1Component }],
})
export class Step1Component implements WizardStep {
  show = false;
}
