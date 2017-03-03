import { WizardNavigationService } from './wizard/wizard-navigation.service';
import { TestContentComponent } from './wizard/test-content/test-content.component';
import { WizardStepComponent } from './wizard/wizard-step/wizard-step.component';
import { WizardComponent } from './wizard/wizard/wizard.component';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WizardComponent, WizardStepComponent, TestContentComponent, WizardNavigationService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private wizardNavigationService:WizardNavigationService) {}

  ngOnInit() {
    console.log(this.wizardNavigationService);
  }

  goToFirst() {
    this.wizardNavigationService.first();
  }

  public goToNext() {
    this.wizardNavigationService.next();
  }

  public goToBack() {
    this.wizardNavigationService.back();
  }
}
