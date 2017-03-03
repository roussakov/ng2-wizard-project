import { SingleStepAction } from './single-step-action';
import { WizardAction } from './wizard-action';
import { QueryList } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

export class BackAction extends SingleStepAction {

    public execute(list) {
        super.execute(list.toArray().reverse());
    }

}
