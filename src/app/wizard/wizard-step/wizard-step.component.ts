import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'wizard-step',
  template: `
  <div *ngIf="active">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class WizardStepComponent implements OnInit {

  private _active: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get active(): Boolean {
    return this._active;
  }

  public toggle(): void {
    this._active = !this._active;
  }
}
