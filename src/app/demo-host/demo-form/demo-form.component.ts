import { WizardNavigationService } from './../../wizard/wizard-navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styles: [`
  input {
    margin: 10px;
  }
  `]
})
export class DemoFormComponent {

  constructor(private navigationService:WizardNavigationService) { }

  public submitForm(form: any): void{
    //print out form to console
    console.log(form);

    //go to next wizard step
    this.navigationService.next();
  }

}
