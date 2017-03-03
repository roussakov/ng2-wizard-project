import { WizardAction } from './wizard-action';
import { QueryList } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

export class SingleStepAction implements WizardAction{

    public execute(list:QueryList<WizardStepComponent>) {
        list.map((step, i, l) => {
            if (step.active) {
                step.toggle();
                return { "modified" : true, "inner" : step};
            }

            return { "modified" : false, "inner" : step};
        })
        .map((step, i, l) => {
            step.modified && l[++i].inner.toggle();
        });
    }

}
