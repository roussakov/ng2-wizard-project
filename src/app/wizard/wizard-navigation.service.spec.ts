/* tslint:disable:no-unused-variable */
import { WizardAction } from './actions/wizard-action';
import { LastAction } from './actions/last-action';
import { FirstAction } from './actions/first-action';
import { BackAction } from './actions/back-action';
import { NextAction } from './actions/next-action';
import { WizardNavigationService } from './wizard-navigation.service';

class TestCustomAction implements WizardAction {
  execute() {}
}

fdescribe('WizardNavigationService', () => {
  let service;
  let serviceObservable;

  beforeEach(() => {
    service = new WizardNavigationService;
    serviceObservable = service.actions;
  });

  it('next action should emit NextAction instance to observer', () => {
    serviceObservable.subscribe(action => {
      expect(action).toEqual(jasmine.any(NextAction));
    });

    service.next();
  });

  it('back action should emit BackAction instance to observer', () => {
    serviceObservable.subscribe(action => {
      expect(action).toEqual(jasmine.any(BackAction));
    });

    service.back();
  });

  it('first action should emit FirstAction instance to observer', () => {
    serviceObservable.subscribe(action => {
      expect(action).toEqual(jasmine.any(FirstAction));
    });

    service.first();
  });

  it('last action should emit LastAction instance to observer', () => {
    serviceObservable.subscribe(action => {
      expect(action).toEqual(jasmine.any(LastAction));
    });

    service.last();
  });

  it('custom action should emit TestCustomAction instance to observer', () => {
    serviceObservable.subscribe(action => {
      expect(action).toEqual(jasmine.any(TestCustomAction));
    });

    service.custom(new TestCustomAction);
  });
});
