import { StepCdkLikeComponent } from './components/step-cdk-like/step-cdk-like.component';
import {
  QueryList,
  TemplateRef,
  Directive,
  ContentChildren,
} from '@angular/core';

export interface Selected {
  content?: TemplateRef<any>;
  step: number;
}

@Directive()
export class CkdStepperLike {
  activeStep = 0;
  @ContentChildren(StepCdkLikeComponent) steps = new QueryList<
    StepCdkLikeComponent
  >();

  get isLast(): boolean {
    return this.activeStep === this.steps.length - 1;
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

  get template(): TemplateRef<any> | null {
    return this.steps.toArray()[this.activeStep].template;
  }
}
