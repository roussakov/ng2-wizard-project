import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { TestContentComponent } from './test-content/test-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [WizardComponent, WizardStepComponent, TestContentComponent],
  declarations: [WizardComponent, WizardStepComponent, TestContentComponent]
})
export class WizardModule { }
