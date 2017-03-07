import { BreadcrumbsService } from './../breadcrumbs.service';
import { WizardNavigationService } from './../wizard-navigation.service';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';
import { Component, AfterContentInit, ContentChildren, QueryList, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Breadcrumbs } from './../breadcrumbs';

@Component({
  selector: 'wizard',
  template: `<ng-content></ng-content>`
})
export class WizardComponent implements AfterContentInit, OnInit {

  @ContentChildren(WizardStepComponent) private wizardStepComponents: QueryList<WizardStepComponent>;

  constructor(
    private wizardNavigationService:WizardNavigationService,
    private breadcrumbsService:BreadcrumbsService
  ) { }

  ngOnInit() {
    this.wizardNavigationService.actions.subscribe((action) => {
        action.execute(this.wizardStepComponents);

        const breadcrumbs = this.wizardStepComponents.map(step => {
          return new Breadcrumbs(step.title, step.active);
        });

        this.breadcrumbsService.breadcrumbs.next(breadcrumbs);
    });
  }

  ngAfterContentInit() {
    this.wizardNavigationService.first();
  }

}
