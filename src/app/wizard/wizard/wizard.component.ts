import { BreadcrumbsService } from './../breadcrumbs.service';
import { WizardNavigationService } from './../wizard-navigation.service';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';
import { Component, AfterContentInit, ContentChildren, QueryList, OnInit, Optional } from '@angular/core';
import { Breadcrumbs } from './../breadcrumbs';
import {WizardAction} from "../actions/wizard-action";

@Component({
  selector: 'wizard',
  template: `<ng-content></ng-content>`
})
export class WizardComponent implements AfterContentInit, OnInit {

  @ContentChildren(WizardStepComponent) private wizardStepComponents: QueryList<WizardStepComponent>;

  constructor(
    private wizardNavigationService:WizardNavigationService,
    @Optional() private breadcrumbsService:BreadcrumbsService
  ) { }

  ngOnInit() {
    this.wizardNavigationService.actions.subscribe((action:WizardAction) => {
        action.execute(this.wizardStepComponents);

        if(this.breadcrumbsService !== null) {
          const breadcrumbs = this.wizardStepComponents.map(step => new Breadcrumbs(step.title, step.active));
          this.breadcrumbsService.breadcrumbs.next(breadcrumbs);
        }
    });
  }

  ngAfterContentInit() {
    this.wizardNavigationService.first();
  }

}
