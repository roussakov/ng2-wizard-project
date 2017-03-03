import { WizardNavigationService } from './../wizard-navigation.service';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';
import { Component, AfterContentInit, ContentChildren, QueryList, OnInit } from '@angular/core';

@Component({
  selector: 'wizard',
  template: `<ng-content></ng-content>`,
  providers: []
})
export class WizardComponent implements AfterContentInit, OnInit {

  @ContentChildren(WizardStepComponent) wizardStepComponents: QueryList<WizardStepComponent>;

  constructor(private wizardNavigationService:WizardNavigationService) { }

  ngOnInit() {
    this.wizardNavigationService.actions.subscribe((action) => {
        action.execute(this.wizardStepComponents);
    });
  }

  ngAfterContentInit() {
    this.wizardStepComponents.first.toggle();
  }
}
