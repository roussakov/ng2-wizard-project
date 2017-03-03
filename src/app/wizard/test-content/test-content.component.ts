import { WizardNavigationService } from './../wizard-navigation.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'test-content',
  template: `
  <div>
    <p>
      test-content Works!
    </p>
    <button (click)="doSomething()">Submit</button>
    <button (click)="goToLast()">Go LAST</button>
    </div>
  `,
  styles: [],
})
export class TestContentComponent {

  constructor(private wizardNavigationService:WizardNavigationService) {}

  ngOnInit() {
     console.log(this.wizardNavigationService);
  }

  goToLast() {
    this.wizardNavigationService.last();
  }
  
  public doSomething() {
    this.wizardNavigationService.next();
  }

}