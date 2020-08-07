import { Observable, Subject } from 'rxjs';

export abstract class WizardStep {
  abstract show: boolean;
}
