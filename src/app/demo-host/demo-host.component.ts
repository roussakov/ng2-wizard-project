import { BreadcrumbsService } from './../wizard/breadcrumbs.service';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { WizardNavigationService } from './../wizard/wizard-navigation.service';
import { WizardStepComponent } from './../wizard/wizard-step/wizard-step.component';
import { WizardComponent } from './../wizard/wizard/wizard.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-host',
  templateUrl: './demo-host.component.html',
  styleUrls: ['./demo-host.component.css'],
  providers: [
    WizardComponent, 
    WizardStepComponent, 
    WizardNavigationService,
    BreadcrumbsService,
    DemoFormComponent]
})
export class DemoHostComponent {

  constructor(private navigationService:WizardNavigationService) { }

  //example of wizard navigation from host/container component
  public goNext(){
    this.navigationService.next();
  }

}
