import { WizardStepComponent } from './../wizard-step/wizard-step.component';
import { QueryList } from '@angular/core';

export interface WizardAction {

    execute(list:QueryList<WizardStepComponent>);
}
