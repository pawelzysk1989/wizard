import {
  Component,
  ContentChildren,
  Type,
  AfterContentChecked,
} from '@angular/core';
import { WizardStep } from './wizard/wizard-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ContentChildren(WizardStep) steps: Type<WizardStep>[] = [];
}
