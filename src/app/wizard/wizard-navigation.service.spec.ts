/* tslint:disable:no-unused-variable */
import { WizardAction } from './actions/wizard-action';
import { LastAction } from './actions/last-action';
import { FirstAction } from './actions/first-action';
import { BackAction } from './actions/back-action';
import { NextAction } from './actions/next-action';
import { WizardNavigationService } from './wizard-navigation.service';
import {Subject} from "rxjs";

class TestCustomAction implements WizardAction {
  execute() {}
}

describe('WizardNavigationService', () => {
  let service;
  let serviceSubject;

  beforeEach(() => {
    service = new WizardNavigationService;
    serviceSubject = service.actions;

    spyOn(serviceSubject, "next");
  });

  it('next action should emit NextAction instance to observer', () => {
    service.next();
    expect(serviceSubject.next).toHaveBeenCalledWith(jasmine.any(NextAction));
  });

  it('back action should emit BackAction instance to observer', () => {
    service.back();
    expect(serviceSubject.next).toHaveBeenCalledWith(jasmine.any(BackAction));
  });

  it('first action should emit FirstAction instance to observer', () => {
    service.first();
    expect(serviceSubject.next).toHaveBeenCalledWith(jasmine.any(FirstAction));
  });

  it('last action should emit LastAction instance to observer', () => {
    service.last();
    expect(serviceSubject.next).toHaveBeenCalledWith(jasmine.any(LastAction));
  });

  it('custom action should emit TestCustomAction instance to observer', () => {
    service.custom(new TestCustomAction);
    expect(serviceSubject.next).toHaveBeenCalledWith(jasmine.any(TestCustomAction));
  });

});
