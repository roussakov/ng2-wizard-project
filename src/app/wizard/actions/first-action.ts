import { WizardAction } from './wizard-action';
import { QueryList } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

export class FirstAction implements WizardAction {

    public execute(list:QueryList<WizardStepComponent>) {
        list.find(step => step.active === true).toggle();
        list.first.toggle();
    }

}
