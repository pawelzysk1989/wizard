import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-wizard-outlet',
  templateUrl: './wizard-outlet.component.html',
  styleUrls: ['./wizard-outlet.component.scss'],
})
export class WizardOutletComponent {
  activeStep = 0;
  @ContentChildren('step') stepTemplates: QueryList<
    TemplateRef<any>
  > = new QueryList();

  defaultNavigationContext = {
    back: this.back.bind(this),
    forward: this.forward.bind(this),
  };

  @ContentChild('navigation') navigation: TemplateRef<any> | undefined;

  get isLast(): boolean {
    return this.activeStep === this.stepTemplates.length - 1;
  }

  get isFirst(): boolean {
    return this.activeStep === 0;
  }

  isActive(step: number): boolean {
    return step === this.activeStep;
  }

  back(): void {
    if (!this.isFirst) {
      this.activeStep--;
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.activeStep++;
    }
  }
}
