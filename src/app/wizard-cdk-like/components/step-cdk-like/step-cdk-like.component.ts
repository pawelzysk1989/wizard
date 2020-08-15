import { AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-cdk-like',
  templateUrl: './step-cdk-like.component.html',
  styleUrls: ['./step-cdk-like.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepCdkLikeComponent implements AfterContentChecked {
  template: TemplateRef<any> | null = null;
  @ViewChild('content') content: TemplateRef<any> | null = null;

  ngAfterContentChecked(): void {
    this.template = this.content;
  }
}
