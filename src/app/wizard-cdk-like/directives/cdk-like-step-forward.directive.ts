import { Directive, HostListener } from '@angular/core';
import { CkdStepperLike } from '../ckd-stepper-like';

@Directive({
  selector: '[appCdkLikeStepForward]',
})
export class CdkLikeStepForwardDirective {
  constructor(private ckdStepperLike: CkdStepperLike) {}

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.ckdStepperLike.forward();
  }
}
