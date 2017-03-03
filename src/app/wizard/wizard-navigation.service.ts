import { FirstAction } from './actions/first-action';
import { LastAction } from './actions/last-action';
import { BackAction } from './actions/back-action';
import { WizardAction } from './actions/wizard-action';
import { NextAction } from './actions/next-action';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WizardNavigationService {
  private _actions: Subject<WizardAction> = new Subject<WizardAction>();
  
  public next():void {
    this._actions.next(new NextAction);
  }

  public back():void {
    this._actions.next(new BackAction);
  }

  public first():void {
    this._actions.next(new FirstAction);
  };

  public last():void {
    this._actions.next(new LastAction);
  };

  public custom(action:WizardAction):void {
    this._actions.next(action);
  }

  get actions():Observable<WizardAction> {
    return this._actions;
  }
}
