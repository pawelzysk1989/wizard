import { Directive, HostListener } from '@angular/core';
import { CkdStepperLike } from '../ckd-stepper-like';

@Directive({
  selector: '[appCdkLikeStepPrevious]',
})
export class CdkLikeStepPreviousDirective {
  constructor(private ckdStepperLike: CkdStepperLike) {}

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.ckdStepperLike.back();
  }
}
