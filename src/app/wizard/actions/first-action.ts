import { WizardAction } from './wizard-action';
import { QueryList } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

export class FirstAction implements WizardAction {

    public execute(list:QueryList<WizardStepComponent>) {
        let current = list.find(step => step.active === true);

        if(typeof current !== "undefined") {
            current.toggle();
        }

        list.first.toggle();
    }

}
