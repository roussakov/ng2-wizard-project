import { Component, Input } from '@angular/core';

@Component({
  selector: 'wizard-step',
  template: `
  <div *ngIf="active">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class WizardStepComponent {

  @Input() title:string;
  private _active: Boolean = false;

  get active(): Boolean {
    return this._active;
  }

  public toggle(): void {
    this._active = !this._active;
  }

}
