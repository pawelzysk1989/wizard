import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { CdkStepper } from "@angular/cdk/stepper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("cdkStepper")
  cdkStepper: CdkStepper | undefined;

  ngAfterViewInit(): void {
    this.cdkStepper?.selectionChange.subscribe(console.log);
  }
}
